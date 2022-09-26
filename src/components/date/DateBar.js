import React from 'react'
import styles from "./DateBar.module.css"


//unfinished component that should display the date
const DateBar = (props) => {



  return (
    <div className={styles['date-bar']} >{props.date}</div>
  )
}

export default DateBar