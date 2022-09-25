import './App.css';
import Navbar from './components/navigation/NavBar';
import React, { useEffect, useState } from 'react'
import { Home } from './components/home/Home';
import DateBar from './components/date/DateBar';
import Calendar from './components/calendar/Calendar';


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
  const [safedIds, setSafedIds] = useState(null)
  const [eventsPrepCalendar, setEventsPrepCalendar] = useState([Event])
  const [currentDate, setCurrentDate] = useState();


  
  useEffect(() => {
      fetch('https://tlv-events-app.herokuapp.com/events/uk/london')
      .then(response => response.json())
      .then(res => {setEvents(res);})
      .catch(err => console.log(err))
  }, [])

  function addSafedId (id) {
    if(safedIds !== null){
      if(!safedIds.includes(id)){
        safedIds.push(id);
      }
    } else setSafedIds([id]);  
    console.warn(safedIds)
  }

  return (
    <>  
      <Navbar ammount={safedIds&&safedIds.length} />
      <DateBar date={currentDate? currentDate:"no date available"} />
      {
        window.location.pathname === "/calendar"?
        safedIds && <Calendar events={events} ids={safedIds} />
        :
        events && <Home events={events} addSafedId={addSafedId} />
      }
    </>
    
  );
}

export default App;
