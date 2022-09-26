import React from 'react'
import SingleEvent from '../../event/SingleEvent'
import SearchBar from '../searchBar/SearchBar';
import { Link } from 'react-router-dom';


export const Home = (props) => {

    //passed down to SingleEvent.js //adds a saved event
    function addSafedId(id) {
        props.addSafedId(id);
    }
    
    props.events.sort(function (a, b) {
        //since we transformed the string date to Date objects we can compare like this:
        return new Date(a.date) - new Date(b.date);
    });

    return (
        <>
            {/* used to get rid of events when user clicks on search*/}
            <Link to='/search'>
                <SearchBar placeholder='Search for an event' data={props.events} add={addSafedId} />
            </Link>
            {window.location.pathname !== "/search" && props.events && props.events.map((event) => {
                return (
                    <SingleEvent event={event} add={addSafedId} showPlus={true} />
                )
            })
            }
        </>
    );
}
