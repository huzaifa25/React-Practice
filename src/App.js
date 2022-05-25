import React, { useState } from "react";
import './form.css'

const App = () => {

    
    const [holder, Setholder] = useState("");
    const[fullName, SetFullName] = useState();

    const nameSafer = (event) =>{
        console.log (event.target.value)
        Setholder(event.target.value)
    }
    const safeer = () => {
        
        SetFullName(holder);
    }

    return(
        <>
            <div>
                <h1>Hello {fullName}</h1>
                <input type="text" placeholder="Enter Your Name" onChange={nameSafer} value={holder}/>
                <button onClick={safeer}>Submit</button>
            </div>
        </>
    );
}
export default App;