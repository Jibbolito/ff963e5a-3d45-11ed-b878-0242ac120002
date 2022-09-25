import React from 'react'
import SingleEvent from '../../event/SingleEvent'


export const Home = (props) => {    
    function addSafedId (id){
        props.addSafedId(id);
    }
    props.events.sort(function(a,b){
        //since we transformed the string date to Date objects we can compare like this:
        return  new Date(a.date) - new Date(b.date);
    });

    return (
        <>
            { props.events && props.events.map((event) => {
              return(
                 <SingleEvent event={event} add={addSafedId} />
             )})
            } 
        </>
    );
}
