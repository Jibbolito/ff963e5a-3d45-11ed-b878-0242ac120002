import React from 'react'
import SingleEvent from '../../event/SingleEvent'
import SearchBar from '../searchBar/SearchBar';


export const Home = (props) => {

    function addSafedId(id) {
        props.addSafedId(id);
    }
    props.events.sort(function (a, b) {
        //since we transformed the string date to Date objects we can compare like this:
        return new Date(a.date) - new Date(b.date);
    });

    return (
        <>
            <a href='/search'>
                <SearchBar placeholder='Search for an event' data={props.events} add={addSafedId} />
            </a>
            {window.location.pathname !== "/search" && props.events && props.events.map((event) => {
                return (
                    <SingleEvent event={event} add={addSafedId} showPlus={true} />
                )
            })
            }
        </>
    );
}
