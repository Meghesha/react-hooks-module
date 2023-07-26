// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

import './style.css';
import DigitalWatch from './components/DigitalWatch';

let App=()=> {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-secondary navbar-expand-sm">
        <a href="/" className="navbar-brand">React Hooks - Life Cycle</a>
      </nav>
      <DigitalWatch/>
      

    </React.Fragment>
  );
}

export default App;
