// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

import './style.css';
import ComponentA from './components/ComponentA';

let App=()=> {
  let[user,setUser]=useState({
    channel : 'UI Brains Technologies',
    author : 'Naveen Saggam'
  })

  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-secondary navbar-expand-sm">
        <a href="/" className="navbar-brand">React Hooks - Props Drilling</a>
      </nav>

      <section className="p-3">
          <div className="container">
              <div className="row">
                  <div className="col">
                      <div className="card">
                          <div className="card-header rgba-green-light">
                              <p className="h3">App Component</p>
                              <p>{JSON.stringify(user)}</p>
                             
                              <ComponentA user={user}/>
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
