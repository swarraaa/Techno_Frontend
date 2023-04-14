import React, { useRef, useState } from "react";
import styles from "./Blogf.css";
import axios from "axios";

const Blog_f = () => {
  const title = useRef();
  const Description = useRef();
  const Content = useRef();
  const [file, setFile] = useState(undefined);
  const id = localStorage.getItem("_id");

  async function submitHandler() {
    let data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "gmcn2mfb");
    await axios
      .post("https://api.cloudinary.com/v1_1/dcglxmssd/image/upload", data)
      .then(async (res) => {
        await axios
          .post(
            "http://localhost:8000/blog/createBlog",
            {
              title: title.current.value,
              author: id,
              description: Description.current.value,
              content: Content.current.value,
              image: res.data.url,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((res) => console.log(res));
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
