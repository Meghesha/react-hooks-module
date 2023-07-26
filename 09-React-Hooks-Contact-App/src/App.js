// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

import './style.css';
import ContactApp from './components/ContactApp';

let App=()=> {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-secondary navbar-expand-sm sticky-top">
        <a href="/" className="navbar-brand">React Hooks - Contact App</a>
      </nav>

      <ContactApp/>
      
      

    </React.Fragment>
  );
}

export default App;
