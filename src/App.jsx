import {React, useState} from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx"; 
import Posts from "./Posts.jsx";
import About from "./About.jsx";
import PostForm from "./PostForm.jsx";
import PostCard from "./PostCard.jsx";
import axios from "axios";


function App() {


  const [file, setFile] = useState(null);
  const [name, setName] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const uploadImage = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", name);

    try {
      const res = await axios.post(
        "http://localhost:3009/uploadimage",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert(res.data.message);
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };
  return (
    <>
    {/* <Routes>
   <Route path="/" element={<Layout><Posts FormComponent={PostForm} CardComponent={PostCard} /></Layout>} />
   <Route path="/about" element={<Layout><About/></Layout>} />
    </Routes> */} 

<div style={{ padding: "40px" }}>
      <h2>Image Upload Demo</h2>

      <input type="file" onChange={handleFileChange} />
      <input type="text" placeholder="Enter name" onChange={handleNameChange} />
      <br /><br />

      <button onClick={uploadImage}>Upload</button>
      <img src={"http://localhost:3009/uploads/nike-logo-png_seeklogo-99478.png"} alt="Uploaded" />
    </div>
  
    </>
  );
}

export default App
