
import React from "react";
import { useState } from "react";




const App = () => {
    let CurrentTime = new Date().toLocaleTimeString();
    const [CTime, SetCTime] = useState(CurrentTime);
    const NewTime = () => {
        CurrentTime = new Date().toLocaleTimeString();
        SetCTime(CurrentTime);
    }
    return(
        <>
            <h1>{CTime}</h1>
            <button onClick={NewTime}>Get Update Time</button>
        </>
    );
}
export default App;