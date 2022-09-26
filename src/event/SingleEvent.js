import React from 'react'
import styles from './SingleEvent.module.css'
import plus from "./assets/icons8-plus-24.png"
import cal from "./assets/calendar.png"
import mapSymbol from "./assets/map.png"



const SingleEvent = ({ event, add, showPlus }) => {
  //adds a saved event
  const handleClick = () => {
    add(event._id);
  }

  let date = new Date(event.date)

  return (
    <div className={styles["container"]}>
      <div className={styles['pictureFrame']}>
        <a href={"https://ra.co" + event.contentUrl} target="_blank" >
          {typeof event.flyerFront !== 'undefined' > 0 ?
            <img
              className={styles['picture']}
              src={event.flyerFront ? event.flyerFront : cal}
              alt="new"
            />
            :
            <img className={styles['picture']} src={cal} />}
        </a>
      </div>
      <div className={styles['name']}>{event.title}</div>
      <div className={styles['date']}>| Date: {date.toDateString()}</div>
      {showPlus && <div className={styles['plus']}>
        <img src={plus} onClick={handleClick} />
      </div>}
      <div className={styles['plus']}>
        <a href={event.venue.direction} target="_blank">
          <img className={styles['location']} src={mapSymbol} />
        </a>
      </div>
    </div>
  )
}

export default SingleEvent