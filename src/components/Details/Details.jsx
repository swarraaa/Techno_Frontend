import React from 'react'
import styles from './Details.module.css'

const Details = () => {
  return (
    <div className={styles.Details}>
      <div className={styles.MetaData}>
        <p>Ms Swarada Bhosale</p>
        <p>26 Mar 2023</p>
      </div>
      <h1 className={styles.title}>Title is amazing like it should be</h1>
      <p className={styles.Description}>
        adsfa dfad sfads fadf adsfa dsfa sdfadf asdd fasd fads fadsf adf asdfad
        sf
      </p>
      <div className={styles.ImageContainer}>
        <img
          src='https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFuaW1hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
          alt='adfadf'
        />
      </div>
      <div className={styles.InfoContainer}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quod,
          impedit tempore distinctio, nisi recusandae temporibus eligendi cumque
          est sunt magni reiciendis quam? Illo, molestiae? Voluptatum veritatis
          fugiat maxime! Quae voluptatum eos quam accusamus quis et aut
          laboriosam vero quia omnis maiores quaerat nam, totam saepe, iure
          expedita reprehenderit eius?
        </p>
      </div>
    </div>
  )
}

export default Details
