import React from 'react'
import SingleEvent from '../../event/SingleEvent';

const Calendar = (props) => {
    return (
        <>
            { props.events && props.events.map((event) => {
              return(
                 <SingleEvent event={event}  />
             )})
            } 
        </>
    );
}

export default Calendar