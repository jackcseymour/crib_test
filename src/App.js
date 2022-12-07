import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Chat from './pages/chat';
import Home from './pages';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/chat' element={<Chat />} />
    </Routes>
    </Router>
  );
}

export default App;
