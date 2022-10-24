import logo from './logo.svg';
import React from 'react';
import { browswerHistory, Router, Route, Routes,  Switch } from 'react-router';
import './SignIn.jsx';
import './App.css';
import {SignIn} from './SignIn';

export const App = () => { 
  return (
    //<div className = "app"> 
  <Router>
    <li>
      <Link to="/SignIn">Signin</Link>
    </li>


    <Switch>
    <Route path = "./SignIn.jsx" component = {SignIn} />
    </Switch>
  </Router>





    
    //</div>


  );




};


export default App;
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}




*/
