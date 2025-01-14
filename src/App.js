import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import Room from './pages/room'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/room/:roomId' element={<Room />} />
    </Routes>
    </>
  )
}

export default App