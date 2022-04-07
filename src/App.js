import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Header from './Header.js'
import User from './User.js'
import Register from './Register.js';
import Login from './Login';
import Time from './Time';
import "./index.css"
import ChangeName from './ChangeName';
function App() {
  
  return (
    <div className="App">
  

        <Time/>
        <ChangeName/>

     
    </div>
  );
}

// function Ball(){
//   return(
//   <div>
//     <h1>this component is  in app.js</h1>
//   </div>
//   );
// }


export default App;
