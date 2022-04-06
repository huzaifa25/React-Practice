import React from 'react';
import ReactDom from'react-dom';

const fname = "huzaifa";
const CurrentDate = new Date().toLocaleDateString();
const CurrentTime = new Date().toLocaleTimeString();
ReactDom.render(
  <>
    <h1>Hello , my name is {fname}</h1>
    <p>Current Date: {CurrentDate}</p>
    <p>Current Time: {CurrentTime}</p>
  </>,
 document.getElementById('root')
  );
  