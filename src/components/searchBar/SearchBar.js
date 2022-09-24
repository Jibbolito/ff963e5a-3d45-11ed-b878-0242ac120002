import React from 'react'
import styles from "./SearchBar.module.css"

const SearchBar = ({placeholder, data}) => {
  return (
    <div className={styles["search"]}>
        <div className={styles['searchInputs']}>
            <input type="text" placeholder={placeholder} />
            <div className={styles['searchIcon']}></div>
        </div>
        <div className={styles['dataResults']}>

        </div>
    </div>
  )
}

export default SearchBar