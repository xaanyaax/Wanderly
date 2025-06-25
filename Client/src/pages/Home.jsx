import React, { useState, useEffect } from "react";
import Form from "../components/Form/Form";
import Posts from "../components/Posts/Posts";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";


function Home() {


  const [posts, setPosts] = useState([]);

  // Fetch posts from backend once when component loads
  useEffect(() => {
    axios.get("http://localhost:8080/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error("Failed to fetch posts", err));
  }, []);

  // Called when a new post is created
  const handlePostCreated = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  // Called when a post is deleted
  const handlePostDeleted = (id) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post._id !== id));
  };

  return (
    <div>
      <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex px-1 py-8 gap-8">
      {/* <Navbar /> */}
      <div className="flex-1">
        {/* Pass posts and delete handler */}
        <Posts posts={posts} onPostDeleted={handlePostDeleted} />
      </div>

      <div className="pr-10 py-5">
        {/* Pass onPostCreated to Form */}
        <Form onPostCreated={handlePostCreated} />
      </div>
    </div>
    </div>
  );
}

export default Home;
