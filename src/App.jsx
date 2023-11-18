import React from 'react'
import '/public/assets/css/Style.css'
import ExerciseIndex from "./pages/ExerciseIndex"
import Props from "./pages/Props"
import TernaryOperators from "./pages/TernaryOperators"
import SimpleUseState from "./pages/SimpleUseState"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  return (
    <Router>
      <ExerciseIndex/>
      <Routes>
        <Route exact path="/Props" element={<Props />} />
        <Route exact path="/TernaryOperators" element={<TernaryOperators />} />
        <Route exact path="/SimpleUseState" element={<SimpleUseState />} />
      </Routes>
    </Router>
      
  )
}

export default App
