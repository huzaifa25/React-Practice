let currentDate = new Date();
currentDate = currentDate.getHours();
let greeting = "";
const cssStyle = {};
if (currentDate > 1 && currentDate <12){
  greeting = "Good night";
  cssStyle.color ="black";
}else if(currentDate > 12 && currentDate < 16){
  greeting = "Good Morning";
  cssStyle.color ="green";
}else {
  greeting = "Good Afternoon";
  cssStyle.color = "yellow";
}

function Time(){
   return(
    <>        
        <h1>Hello Sir,<span style={cssStyle}> {greeting}</span> </h1>
    </>

)
}
export default Time