// import logo from './logo.svg';
import './App.css';
import ClientCard from './advanced/ClientCard';
import ParentCard from './intermediate/ParentCard';
import Parent from './simple/Parent';
import {useState} from 'react';

import './style.css';
import ServerCard from './advanced/ServerCard';

let App=()=> {
  let[total,setTotal]=useState(0);
  let receiveTotal=(value)=>{
    setTotal(value);
  }
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-secondary navbar-expand-sm">
        <a href="/" className="navbar-brand">React Hooks - Component Interaction</a>
      </nav>
      {/* simple */}
      {/* <Parent/>   */}
      {/* Intermediate */}
      {/* <ParentCard/> */}

      {/* Advanced */}
      <section className="p-3">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <ClientCard sendTotal={receiveTotal}/>
            </div>
            <div className="col-md-4">
              <ServerCard total={total}/>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
