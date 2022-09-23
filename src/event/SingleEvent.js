import React from 'react'
import styles from './SingleEvent.module.css'
import plus from "./assets/icons8-plus-24.png"
import cal from "./assets/calendar.png"



const SingleEvent = (props ) => {
    console.warn(props)
    const handleClick = () => {

    }
    
  return (
    <div className={styles["container"]}>
        <div className={styles['pictureFrame']}>
          {typeof props.flyerFront !== 'undefined' > 0 ? 
          <img className={styles['picture']} src={props.flyerFront} alt="new"  /> 
          : 
          <img className={styles['picture']} src={cal}  />}
        </div>
        <div className={styles['name']}>{props.title}</div>
        <div className={styles['date']}>| Date: {props.date}</div>
        <div className={styles['plus']}>
          <img src={plus} onClick={handleClick} />
        </div>
    </div>
  )
}

export default SingleEvent