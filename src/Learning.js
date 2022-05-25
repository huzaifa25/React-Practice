import React, { useState } from "react";

const Learnig = () =>{

let bcolor = "#fff";
const [color, SetColor] = useState(bcolor);

const chngColor = () =>{
    const blue = "#0000FF";
    
    SetColor(blue);
}
return(
    <div style={{backgroundColor: color}}>
        <button onClick={chngColor}>click me</button>
    </div>
    );
}
export default Learnig;