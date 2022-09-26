import React from 'react'
import SingleEvent from '../../event/SingleEvent';

const Calendar = ({ events }) => {

    if (events !== null) {
        events.sort(function (a, b) {
            //since we transformed the string date to Date objects we can compare like this:
            return new Date(a.date) - new Date(b.date);
        });
    }

    return (
        <>
            {events && events.map((event) => {
                return (
                    <SingleEvent event={event} />
                )
            })
            }
        </>
    );
}

export default Calendar