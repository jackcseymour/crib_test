import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Chat from './pages/groupChat/Chat'
import List from './pages/shopping/List'
import Home from './pages'

function App() {
  return (
    <div class="static-site">
      <div class="side-nav">
        <img src="src/logo.png" alt="Crib logo" />
        <h1>Group Name </h1>
        <ul>
          <li class="primary">
            <a href="#">Member 1</a>
          </li>
          <li class="primary">
            <a href="#">Member 2</a>
          </li>
          <li class="primary">
            <a href="#">Member 3</a>
          </li>
          <li class="primary">
            <a href="#">Member 4</a>
          </li>
          <li class="secondary">
            <a href="#">Private Chat</a>
          </li>
          <li class="secondary">
            <a href="#">Individual Schedules</a>
          </li>
        </ul>
      </div>
      <div class="top-nav">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Chat" element={<Chat />} />
            <Route path="/list" element={<List />} />
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App
