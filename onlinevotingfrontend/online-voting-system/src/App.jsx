import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import './App.css'
import Parties from './pages/Parties';
import VoteSuccess from './pages/VoteSuccess';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    {/* <Navbar /> */}
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      {/* <Route path="/voters" element={<Voters />} /> */}
      <Route path="/" element={<Parties />} />
      <Route path="/vote-success" element={<VoteSuccess />} />
      {/* <Route path="/results" element={<Results />} /> */}
    </Routes>
  </Router>
  )
}

export default App
