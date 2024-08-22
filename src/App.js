import React from 'react';
import '../src/index.css';
import './App.css';
import NavBar from './components/NavBar/index';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

import Footer from './components/Footer/index';

function App() {
  return (
    <BrowserRouter>
      <div className="appContainer">
        <NavBar/>
        <Routes/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
