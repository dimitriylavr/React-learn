import React, { useState } from "react";
import '../src/styles/App.css';
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'JavaScript - это язык программирования!' },
    { id: 2, title: 'Python', body: 'это язык программирования!' },
    { id: 3, title: 'Dart', body: 'A Dart - это язык программирования!' },
  ]);
  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <div>
        <hr style={{ margin: '15px 0' }} />
        <MyInput
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder='Поиск...'
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue='Сортировать ...'
          options={[
            { value: 'title', name: 'По наименованию' },
            { value: 'body', name: 'По описанию' },
          ]}
        />
      </div>
      {posts.length
        ?
        <PostList remove={removePost} posts={posts} title="Список постов!" />
        :
        <h1 style={{ textAlign: 'center' }}>Постов нет!</h1>
      }

    </div>
  );
}

export default App;
