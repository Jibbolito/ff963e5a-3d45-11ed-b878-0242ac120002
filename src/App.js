import './App.css';
import Navbar from './components/navigation/NavBar';
import React, { useEffect, useState } from 'react'
import { Home } from './components/home/Home';


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
  }, [])

  function handleIncomingData () {
    let array = [];
    if(events.length > 0) {
      events.forEach(event => {
        ids.push(event["_id"]);
        let date = new Date(event["date"]);
        array.push(new Event(event["_id"], event["title"], date.toDateString(), event["flyerFront"], event["contentUrl"], event["venue"]["direction"]))
        setEventsPrep(array)
      })
    }
    //console.log(eventsPrep)
  }

  function addSafedId (id) {
    let temp = safedIds;
    temp.push(id);
    setSafedIds(temp);
    console.warn("third")
  }

  return (
    <>  
      <Navbar/>
      {eventsPrep.length > 0 ? <Home events={eventsPrep} addSafedId={addSafedId} /> : <></>}
    </>
    
  );
}

export default App;
