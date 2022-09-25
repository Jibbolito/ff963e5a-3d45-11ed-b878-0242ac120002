import React from 'react'
import SingleEvent from '../../event/SingleEvent';

const Calendar = ({events, ids}) => {

    console.log(events);
    console.log(ids);

    let temp = [];
    if (events !== null && ids !== null){
        temp = events.filter(event => {
            ids.includes(event._id)
        })
        temp.sort(function(a,b){
            //since we transformed the string date to Date objects we can compare like this:
            return  new Date(a.date) - new Date(b.date);
        });
    }


    console.log(temp);

    return (
        <>
            { temp && temp.map((event) => {
              return(
                 <SingleEvent event={event}  />
             )})
            } 
        </>
    );
}

export default Calendar