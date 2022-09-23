import React from 'react'
import styles from './SingleEvent.module.css'
import plus from "./assets/icons8-plus-24.png"



const SingleEvent = (props ) => {
    console.warn(props)
  return (
    <div className={styles["container"]}>
        <div className={styles['pictureFrame']}>
          <img className={styles['picture']} src={props.flyerFront} alt="new"  />
        </div>
        <div className={styles['name']}>{props.title}</div>
        <div className={styles['date']}>| Date: {props.date}</div>
        <div className={styles['plus']}>
          <img src={plus}  />
        </div>
    </div>
  )
}

export default SingleEvent