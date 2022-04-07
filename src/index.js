import React from 'react';
import ReactDom from'react-dom';

const fname = "huzaifa";
const CurrentDate = new Date().toLocaleDateString();
const CurrentTime = new Date().toLocaleTimeString();
const img1="https://media.gettyimages.com/photos/quaideazam-picture-id184944186?s=612x612";
const img2="https://image.shutterstock.com/image-photo/karachi-karachipakistan-july-24-2015-600w-1460360153.jpg";
const img3="https://media.istockphoto.com/photos/sityscape-of-beautiful-metropolitan-city-karachi-picture-id1211781372?k=20&m=1211781372&s=612x612&w=0&h=wrv8gHnnthe_7AuZlvqcXQiDaJyDzuqsPFwh5MNPWTU=";
const links="https://www.icc-cricket.com/awards/player-of-the-month/mens-player-of-the-month?fbclid=IwAR1fdj1djo1Mk_rFCaoq6xPVRJARL2RMHdBdZ2qzybxFTIeFjMfk4FfiZqo#";
const heading={
  color:'green',
};
ReactDom.render(
  <>
    <h1 style={heading}>Hello , my name is {fname}</h1>
    <p>Current Date: {CurrentDate}</p>
    <p>Current Time: {CurrentTime}</p>

    <h1 contentEditable="true">Welcome</h1>
    <img src={img1}/>
    <img src={img2}/>
    <a href={links} >
    <img src={img3}/></a>
  </>,
 document.getElementById('root')
  );
  