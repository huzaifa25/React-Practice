import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Header from './Header.js'
import User from './User.js'
import Register from './Register.js';
function App() {
  const [data,chngData]=useState("kami");
  function apple(){
  
    
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <User names={"huzi"} email={"huzi25dec@gmail.com"} address={"karachi"}/> 
      <Register name={data} />
      <button onClick={()=>{chngData("sid")}}>click me</button>
   
      </BrowserRouter>
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
