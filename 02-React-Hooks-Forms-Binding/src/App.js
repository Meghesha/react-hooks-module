// import logo from './logo.svg';
import './App.css';
import ChangePassword from './components/ChangePassword';
import ChangeUsername from './components/ChangeUsername';
import Registration from './components/Registration';
import SelectBox from './components/SelectBox';
import SmsApp from './components/SmsApp';

import './style.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <ChangeUsername/> */}
      {/* <SelectBox/> */}
      {/* <ChangePassword/> */}
      {/* <Registration/> */}
      <SmsApp/>
    </div>
  );
}

export default App;
