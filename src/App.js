import React, { useState } from "react";
import './form.css'

const App = () => {

    
    const [holder, Setholder] = useState("");
    const[fullName, SetFullName] = useState();

    const nameSafer = (event) =>{
        console.log (event.target.value)
        Setholder(event.target.value)
    }
    const safeer = (event) => {
        event.preventDefault();
        SetFullName(holder);
    }

    return(
        <>
            <form onSubmit={safeer}>
                <div>
                 <h1>Hello {fullName}</h1>
                 <input type="text" placeholder="Enter Your Name" onChange={nameSafer} value={holder}/>
                 <button type="submit">Submit</button>      
                </div>
            </form>
        </>
    );
}
export default App;