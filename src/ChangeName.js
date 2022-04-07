import { useState } from "react";
import Register from "./Register";
function ChangeName()
{   
    const [data,chngData]=useState("kami");
    return(
        <div>
              <Register name={data} />
            <button onClick={()=>{chngData("sid")}}>click me to change the name</button>
        </div>
    )
}
export default ChangeName