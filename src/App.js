import './App.css';
import Navbar from './components/navigation/NavBar';
import React, { useEffect, useState } from 'react'
import { Home } from './components/home/Home';
import DateBar from './components/date/DateBar';
import Calendar from './components/calendar/Calendar';
import SingleEvent from './event/SingleEvent';


function App() {

  class Event {
    constructor(id, title, date, flyerFront, url, location){
      this.id = id;
      this.title = title;
      this.date = date;
      this.flyerFront = flyerFront;
      this.url = url;
      this.location = location;
    }
  }

  const [events, setEvents] = useState(null)
  const [ids, setIds] = useState([])
  const [safedIds, setSafedIds] = useState([])
  const [eventsPrep, setEventsPrep] = useState([Event])
  const [eventsPrepCalendar, setEventsPrepCalendar] = useState([Event])
  const [currentDate, setCurrentDate] = useState();
  const [showCalendar, setShowCalendar] = useState(false);


  
  useEffect(() => {
      fetch('https://tlv-events-app.herokuapp.com/events/uk/london')
      .then(response => response.json())
      .then(res => {setEvents(res);})
      .catch(err => console.log(err))
  }, [])

  function addSafedId (id) {
    if(!safedIds.includes(id)){
      let temp = safedIds;
      temp.push(id);
      setSafedIds(temp);
      const i = events.findIndex(e => e._id === id);
      let date = new Date(events[i]["date"]);
      const event = new Event(events[i]["_id"], events[i]["title"], date, events[i]["flyerFront"], events[i]["contentUrl"], events[i]["venue"]["direction"]);
      if(typeof eventsPrepCalendar){
        let temp2 = eventsPrepCalendar;
        temp2.push(event);
        temp2.sort(function(a,b){
          //since we transformed the string date to Date objects we can compare like this:
          return new Date(b.date) - new Date(a.date);
        });
        setEventsPrepCalendar(temp2);
      } else setEventsPrepCalendar(event);
    }
    //console.warn(safedIds)
    console.warn(eventsPrepCalendar)
  }

  return (
    <>  
      <Navbar style={{position:"sticky"}} ammount={safedIds.length} setShowCalendar={setShowCalendar} />
      <DateBar date={currentDate? currentDate:"no date available"} />
      {
        window.location.pathname === "/calendar"?
        <Calendar events={eventsPrepCalendar.slice(1)} />
        :
        events && <Home events={events} addSafedId={addSafedId} />
      }
    </>
    
  );
}

export default App;
