import '/Users/breeatoomey/web-app-projects/crib/src/pages/index.js';
import React from 'react';
import logo from '/Users/breeatoomey/web-app-projects/crib/src/logo.png';
import './index.css';
  
const Home = () => {
  return (
    <div className='Home'>
      <img class='item' src={logo} alt="logo" />;
      <h1 class='item'>The Crib</h1>
    </div>
  );
};
  
export default Home;