import React from 'react'
import styles from './BlogCard.module.css'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <div className={styles.BlogCard}>
      <div className={styles.imageContainer}>
        <img
          src='https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFuaW1hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
          alt='blogImg'
        />
      </div>
      <div className={styles.InfoContainer}>
        <h3>Title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum velit
          similique reprehenderit numquam, eos inventore iste ab eum commodi
        </p>
        <Link to={`/Detail/12345`}>Read More</Link>
      </div>
    </div>
  )
}

export default BlogCard
