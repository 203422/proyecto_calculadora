import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Calculator from '../pages/Calculator'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Calculator/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
