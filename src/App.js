import './App.css';
import Navbar from './components/navigation/NavBar';
import React, { useEffect, useState } from 'react'
import { Home } from './components/home/Home';


function App() {

  class Event {
    constructor(id, title, date, flyerFront){
      this.id = id;
      this.title = title;
      this.date = date;
      this.flyerFront = flyerFront;
    }
  }

  const [events, setEvents] = useState([])
  const [ids, setIds] = useState([])
  const [safedIds, setSafedIds] = ([])
  const [eventsPrep, setEventsPrep] = useState([Event])

  useEffect(() => {
      fetch('https://tlv-events-app.herokuapp.com/events/uk/london')
      .then(response => response.json())
      .then(
        res => {setEvents(res); 
        console.log(res);
      })
      .catch(err => console.log(err))
      .then(handleIncomingData())
      //.then(console.log("was here"))
  }, [])

  function handleIncomingData () {
    let array = [];
    if(events.length > 0) {
      events.forEach(event => {
        ids.push(event["_id"]);
        let date = new Date(event["date"]);
        array.push(new Event(event["_id"], event["title"], date.toDateString(), event["flyerFront"]))
        setEventsPrep(array)
      })
    }
    console.log(eventsPrep)
  }

  function getSafedIds () {
    return safedIds;
  }


  return (
    <>  
      <Navbar/>
      {eventsPrep.length > 0 ? <Home events={eventsPrep} getter={getSafedIds} setter={setSafedIds} /> : <></>}
    </>
    
  );
}

export default App;
