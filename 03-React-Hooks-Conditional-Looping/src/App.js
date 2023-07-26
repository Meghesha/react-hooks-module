// import logo from './logo.svg';
import './App.css';
import AuthCard from './components/AuthCard'
import Employees from './components/Employees';
import HobbySelectorCheckBox from './components/HobbySelectorCheckBox';
import HobbySelectorRadio from './components/HoobySelectorRadio';

import './style.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-secondary navbar-expand-sm">
        <a href="/" className="navbar-brand">React Hooks - Conditional & Looping</a>
      </nav>
      {/* <AuthCard/> */}
      {/* <HobbySelectorCheckBox/> */}
      {/* <HobbySelectorRadio/> */}
      <Employees/>
    </div>
  );
}

export default App;
