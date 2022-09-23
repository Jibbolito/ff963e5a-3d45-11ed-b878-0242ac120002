import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Calendar from './calendar/Calendar'
import { Home } from './home/Home'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/calendar" element={<Calendar/>}></Route>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter