import React from 'react'
import SingleEvent from '../../event/SingleEvent'
//import DateBar from '../date/DateBar'


export const Home = (props) => {
    console.log(props.events)
    
    function addSafedId (id){
        console.warn("twice")
        props.addSafedId(id);
    }

    return (
        <>
          {props?.events
            ? 
            props.events.map((event) => SingleEvent(event))
            : <></>}
        </>
    );
}
