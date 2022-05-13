//import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
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
//import image from 'https://blog.harlequin.com/wp-content/uploads/2019/12/Virgin-River-poster_forrest_2_with-date-1024x1024.jpg'
//import {Routes, Route, Link} from 'react-router-dom';
function App() {
  
  return (
    <div className="App">

  
      <>
    
      <Card cardimg="https://blog.harlequin.com/wp-content/uploads/2019/12/Virgin-River-poster_forrest_2_with-date-1024x1024.jpg"
            title="The Virgin River"
            link="https://www.netflix.com/pk/title/80240027"/>
      
      <Card cardimg="https://www.tvguide.com/a/img/catalog/provider/1/1/1-7484332417.jpg"
            title="Stranger Things"
            link="https://www.netflix.com/pk/title/80057281"/>
      
      <Card cardimg="https://shannonjeanna.files.wordpress.com/2015/07/maxresdefault.jpg"
            title="The Vampire Diaries"
            link="https://www.netflix.com/title/70143860"/>
            
      </>
    </div>
  );
}

export default App;
