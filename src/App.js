import Navbar from './components/navigation/NavBar';
import React, { useEffect, useState } from 'react'
import { Home } from './components/home/Home';
import DateBar from './components/date/DateBar';
import Calendar from './components/calendar/Calendar';
import SearchBar from './components/searchBar/SearchBar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {

  const [events, setEvents] = useState(null);
  const [safedEvents, setSafedEvents] = useState([]);
  console.log(safedEvents);

  //call to fetch from API
  useEffect(() => {
    fetch('https://tlv-events-app.herokuapp.com/events/uk/london')
      .then(response => response.json())
      .then(res => { setEvents(res); })
      .catch(err => console.log(err))
  }, [])

  //used to add an safed event
  function addSafedId(id) {
    let event = events.find(element => element._id === id)
    let temp = [...safedEvents];    
    if (!temp.includes(event)) {
      setSafedEvents(prev=>[... safedEvents,event])
    }
  }

  return (
    <>
      <Router>
        <Navbar amount={safedEvents && safedEvents.length} events={events && events} />
        <Routes>
          <Route path='/' element={events && <Home events={events} addSafedId={addSafedId} />} />
          <Route path='/calendar' element={safedEvents.length && <Calendar events={safedEvents} />} />
          <Route path='/search' element={<SearchBar placeholder='Search for an event' data={events} />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
