// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

import './style.css';
import UserList from './components/UserList';

let App=()=> {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-secondary navbar-expand-sm sticky-top">
        <a href="/" className="navbar-brand">React Hooks - Http Axios useEffect()</a>
      </nav>
      <UserList/>
      

    </React.Fragment>
  );
}

export default App;
