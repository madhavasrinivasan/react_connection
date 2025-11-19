import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx"; 
import Posts from "./Posts.jsx";
import About from "./About.jsx";
import PostForm from "./PostForm.jsx";
import PostCard from "./PostCard.jsx";


function App() {
  return (
    <>
    <Routes>
   <Route path="/" element={<Layout><Posts FormComponent={PostForm} CardComponent={PostCard} /></Layout>} />
   <Route path="/about" element={<Layout><About/></Layout>} />
    </Routes>
    </>
  );
}

export default App
