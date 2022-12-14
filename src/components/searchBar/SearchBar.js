import React, { useState } from 'react'
import styles from "./SearchBar.module.css"
import SingleEvent from '../../event/SingleEvent'

//inspired, but not copied by https://github.com/machadop1407/React-Search-Bar

const SearchBar = ({ placeholder, data, add }) => {

    const [filteredData, setFilteredData] = useState([])

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase())
        })
        setFilteredData(newFilter)
    }

    return (
        <div className={styles["search"]}>
            <div className={styles['searchInputs']}>
                <input
                    type="text"
                    placeholder={placeholder}
                    onChange={handleFilter}
                    initialValue=""
                />
                <div className={styles['searchIcon']}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </div>
            </div>
            {filteredData.length != 0 &&
                <div className={styles['dataResults']}>
                    {window.location.pathname === "/search" ?
                        filteredData.map((event) => {
                            return <SingleEvent event={event} showPlus={false} add={add} />
                        })
                        :
                        <></>
                    }
                </div>}
        </div>
    )
}

export default SearchBar