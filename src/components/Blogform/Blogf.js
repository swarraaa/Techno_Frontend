import React from "react";
import styles from './Blogf.css';

const Blog_f = () => {
    return (
        <div className="app">
            <div className="blog-form">
                <div className="title">Add Blog</div>
                <form id="wlug">
                    <div className="input-container">
                        <label>Title</label>
                        <input type="text" />
                    </div>
                </form>
                <div className="input-container">
                    <textarea className="description">Description</textarea>
                    <textarea className="content">Content</textarea>
                    <form>
                        <div className="input-container">
                            <label>Image</label>
                            <input type="file" />
                        </div>
                        <div className="final-container">
                            <button typeof="submit" className="button-container">ADD BLOG</button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
}

export default Blog_f
