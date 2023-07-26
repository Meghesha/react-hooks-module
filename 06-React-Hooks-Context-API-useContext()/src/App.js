// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

import './style.css';
import ComponentA from './components/ComponentA';
import { UserContext } from './components/context/UserContext';
import {AppContext} from './components/context/AppContext';

let App=()=> {
  let[user,setUser]=useState({
    channel : 'UI Brains Technologies',
    author : 'Naveen Saggam'
  })
  let[app,setApp]=useState({
    version : '1.4.2',
    appName: 'Youtube'
  })

  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-secondary navbar-expand-sm">
        <a href="/" className="navbar-brand">React Hooks - Context API</a>
      </nav>

      <section className="p-3">
          <div className="container">
              <div className="row">
                  <div className="col">
                      <div className="card">
                          <div className="card-header rgba-green-light">
                              <p className="h3">App Component</p>
                              <p>{JSON.stringify(user)}</p>
                             
                              <UserContext.Provider  value={user}>
                                <AppContext.Provider value={app}>
                                  <ComponentA/>
                                </AppContext.Provider>
                              </UserContext.Provider>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      

    </React.Fragment>
  );
}

export default App;
