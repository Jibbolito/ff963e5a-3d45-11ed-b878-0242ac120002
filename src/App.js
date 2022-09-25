import './App.css';
import Navbar from './components/navigation/NavBar';
import React, { useEffect, useState } from 'react'
import { Home } from './components/home/Home';
import DateBar from './components/date/DateBar';
import Calendar from './components/calendar/Calendar';
import SearchBar from './components/searchBar/SearchBar';


function App() {

  const [events, setEvents] = useState(null)
  const [safedIds, setSafedIds] = useState(null)
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
        let temp = safedIds;
        temp.push(id);
        setSafedIds(temp)
      }
    } else setSafedIds([id]);  
    console.warn(safedIds)
  }

  return (
    <>  
      <Navbar amount={safedIds&&safedIds.length} events={events && events} />
      {window.location.pathname === ("/" || "/calendar")?
      <DateBar date={currentDate? currentDate:"no date available"} />
      :
      <></>
      }
      <a href='/search'>
          <SearchBar placeholder='Search for an event' data={events} />
        </a>
      {
        window.location.pathname === "/calendar"?
        <Calendar events={events} ids={safedIds} />
        :
        window.location.pathname === "/search"?
        <></>
        :
        events && <Home events={events} addSafedId={addSafedId} />
      }
    </>
    
  );
}

export default App;
