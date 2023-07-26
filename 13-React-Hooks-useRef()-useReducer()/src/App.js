// import logo from './logo.svg';
import './App.css';
import React from 'react';
import './style.css';
// import ImageRef from './components/use-ref/ImageRef';
// import Register from './components/use-ref/Register';
import MessageOne from './components/use-reducer/MessageOne';
import MessageTwo from './components/use-reducer/MessageTwo';
import MessageThree from './components/use-reducer/MessageThree';
import MessageFour from './components/use-reducer/MessageFour';
import MessageFive from './components/use-reducer/MessageFive';

let App=()=> {
  return (
    <React.Fragment>
      <nav className="navbar navbar-secondary bg-dark navbar-expand-sm">
        <a href="/" className='navbar-brand  text-white'>React Hooks - useRef(), useReducer()</a>
      </nav>

      {/* <ImageRef/> 
      <Register/> */}

      <MessageOne/>
      <MessageTwo/>
      <MessageThree/>
      <MessageFour/>
      <MessageFive/>

      <div style={{marginBottom : '150px'}} />

    </React.Fragment>
  );
}

export default App;
