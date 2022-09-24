import React from 'react'
import styles from './SingleEvent.module.css'
import plus from "./assets/icons8-plus-24.png"
import cal from "./assets/calendar.png"
import mapSymbol from "./assets/map.png"



const SingleEvent = (props) => {
    console.log(props.event)
    const handleClick = () => {
        console.warn("once")
    }

    return (
        <div className={styles["container"]}>
            <div className={styles['pictureFrame']}>
              <a href={"https://ra.co" + props.url} >
                {typeof props.flyerFront !== 'undefined' > 0 ? 
                <img 
                className={styles['picture']} 
                src={props.flyerFront ? props.flyerFront : cal} 
                alt="new"  
                /> 
                : 
                <img className={styles['picture']} src={cal}  />}
              </a>
            </div>
            <div className={styles['name']}>{props.title}</div>
            <div className={styles['date']}>| Date: {props.date}</div>
            <div className={styles['plus']}>
              <img src={plus} onClick={handleClick} />
            </div>
            <div className={styles['plus']}>
              <a href={props.location}>
                <img className={styles['location']} src={mapSymbol} />
              </a>
            </div>
        </div>
      )
}

export default SingleEvent