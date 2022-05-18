import App from './App'
import './Card.css';

function Card(props){
    console.log('props',props.cardimg)
    return(
        <>  
            <div className="cards">
                <div className="card">
                 <img className='image' src={props.cardimg}/>
                 <div className="cardinfo">
                    <span className="title">{props.title}</span>
                    <br/><a href={props.link} target="_blank"  ><button className='btn'>Watch Now</button></a>
                    </div>
                </div>
            </div>  
        </>
    )
}
export default Card