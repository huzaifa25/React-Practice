//import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './HeaderLink.js'
import User from './User.js'
import Register from './Register.js';
import Login from './Login';
import Time from './Time';
import "./index.css"
import ChangeName from './ChangeName';
import Card from './Card';
import {useState,useEffect} from 'react'
import IpAddress from './IpAddress';
import './Card.css';
import HeaderCard from './HeaderCard';
import Sdata from './Sdata';
import Footer from './Footer';
//import image from 'https://blog.harlequin.com/wp-content/uploads/2019/12/Virgin-River-poster_forrest_2_with-date-1024x1024.jpg'
//import {Routes, Route, Link} from 'react-router-dom';
function ncard(val){
  return(
    <Card
      cardimg = {val.cardimg}
      title = {val.title}
      link = {val.link}
    />
  );
}

function App() {
  
  return (
    <div className="App">

  
      <>
      <HeaderCard/>
      {Sdata.map(ncard)}
      <Footer/>       
      </>
    </div>
  );
}

export default App;
