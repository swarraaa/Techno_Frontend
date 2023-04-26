import React, { useRef, useState } from "react";
import styles from "./Blogf.css";
import axios from "axios";
import { useNavigate } from "react-router";

const Blog_f = () => {
  const title = useRef();
  const Description = useRef();
  const Content = useRef();
  const [file, setFile] = useState(undefined);
  const id = localStorage.getItem("_id");

  const location = useNavigate();

  async function submitHandler() {
    let data = new FormData();
    data.append("title", title.current.value);
    data.append("author", id);
    data.append("description", Description.current.value);
    data.append("content", Content.current.value);
    data.append("file", file);
    await axios
      .post("https://backendtechno.onrender.com/blog/createBlog", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        location("/");
      });
  }

  return (
    <div className="app">
      <div className="blog-form">
        <div className="title">Add Blog</div>
        <div id="wlug">
          <div className="input-container">
            <input ref={title} type="text" placeholder="Title" />
          </div>
          <div className="input-container">
            <textarea
              ref={Description}
              className="description"
              placeholder="Description"
            ></textarea>
            <textarea
              ref={Content}
              className="content"
              placeholder="Content"
            ></textarea>
            <div>
              <div className="input-container">
                <label>Image</label>
                <input
                  onChange={(event) => {
                    setFile(event.target.files[0]);
                  }}
                  type="file"
                />
              </div>
              <div className="final-container">
                <button onClick={submitHandler} className="button-container">
                  ADD BLOG
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog_f;
