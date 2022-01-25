import React, { useRef, useState } from "react";
import '../src/styles/App.css';
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'JavaScript - это язык программирования!' },
    { id: 2, title: 'JavaScript -2', body: 'JavaScript - это язык программирования!' },
    { id: 3, title: 'JavaScript-3', body: 'JavaScript - это язык программирования!' },
  ]);


  return (
    <div className="App">
      <PostForm />

      <PostList posts={posts} title="Список постов!" />
    </div>
  );
}

export default App;
