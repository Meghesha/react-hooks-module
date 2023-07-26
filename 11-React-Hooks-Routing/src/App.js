// import logo from './logo.svg';
import './App.css';
import React from 'react';
import './style.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';
import Employees from './components/employees/Employees';
import About from './components/layout/About';
import EmployeeDetails from './components/employees/EmployeeDetails';
import Stocks from './components/stocks/Stocks';
import StockDetails from './components/stocks/StockDetails';

let App=()=> {
  return (
    <React.Fragment>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/employees' element={<Employees/>}/>
          <Route exact path='/employees/:id' element={<EmployeeDetails/>}/>
          <Route exact path='/stocks' element={<Stocks/>}/>
          <Route exact path='/stocks/:id' element={<StockDetails/>}/>
        </Routes>
      </Router>  
    </React.Fragment>
  );
}

export default App;
