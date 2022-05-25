
import React from "react";
import { useState } from "react";

import Learnig from "./Learning";


const App = () => {
    let CurrentTime = new Date().toLocaleTimeString();
    const [CTime, SetCTime] = useState(CurrentTime);
    const NewTime = () => {
        CurrentTime = new Date().toLocaleTimeString();
        SetCTime(CurrentTime);
    }

    let Time = new Date().toLocaleTimeString();
    const [UpdateTime, SetUpdateTime] = useState(Time);
    const DigiTime = () => {
        Time = new Date().toLocaleTimeString();
        SetUpdateTime(Time);
    }
    const purple = "#8e44ad";
    const [bg, Setbg] = useState(purple);

    let btn = 'Click me for change color'
    const [name, Setname] = useState(btn);
    const chngColor = () => {
       const red = "rgb(233 5 5)"
        Setbg(red);
        btn = 'button name has been changed'
        Setname(btn)
    }
   
    const agnColor = () => {
        Setbg(purple);
        
    }

    setInterval(DigiTime, 1000);
    return(
        <>
            <Learnig/>
             <h1>{CTime}</h1>
             <button onClick={NewTime}>Get Update Time</button>
             <br></br>
            <h1>{UpdateTime}</h1>
            <div style={{backgroundColor: bg}}>
                <button onMouseEnter={chngColor} onMouseLeave={agnColor}>{name}</button>
            </div>
        </>
    );
}
export default App;