import React, { useEffect, useState } from "react";
import Comments from "../Comments/Comments";
import styles from "./Details.module.css";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

const Details = () => {
  const { id } = useParams();
  const _id = localStorage.getItem("_id");
  const [detail, setDetail] = useState(undefined);
  const history = useNavigate();

  useEffect(() => {
    const getSingleBlog = async () => {
      await axios
        .get(`http://localhost:8000/blog/getBlog/${id}`)
        .then((res) => setDetail(res.data.blog));
    };
    getSingleBlog();
  }, [id]);

  const DeleteBlog = async () => {
    await axios
      .post(
        "http://localhost:8000/blog/deleteBlog",
        { _id: id },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        history("/");
      });
  };

  return (
    <>
      {detail !== undefined ? (
        <div className={styles.Details}>
          <div className={styles.MetaData}>
            <p>{detail.author.username}</p>
            <p>{detail.date}</p>
          </div>
          <div className={styles.Details_FirstContainer}>
            <div className={styles.Details_InnerDiv}>
              <h1 className={styles.title}>{detail.title}</h1>
              <p className={styles.Description}>{detail.description}</p>
            </div>
            <div className={styles.ImageContainer}>
              <img src={detail.image} alt="adfadf" />
            </div>
          </div>
          <div className={styles.InfoContainer}>
            <p>{detail.content}</p>
          </div>
          {_id !== null ? (
            <Comments
              _id={id}
              name={detail.author.username}
              comments={detail.comments}
            />
          ) : (
            ""
          )}
          {detail.author._id === _id ? (
            <button onClick={DeleteBlog}>Delete Blog</button>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Details;
