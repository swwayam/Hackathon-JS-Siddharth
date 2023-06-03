import {AiFillPlayCircle, AiFillPauseCircle} from 'react-icons/ai';
import './Player.css';  
import useSound from "use-sound";


const Player = (props) => {

    
    const [play, {pause}] = useSound(props.music);
    function start(){
        play(); 
    
    }
    function stop(){
        pause();
       
    }

    return(
        <div className="PlayerDiv">
            <div className='mainContainer'>
                <h1>Now Playing:</h1>
                <img src={props.image} alt='playing' height={420}/>
                <h1 className='title'>{props.Name}</h1>
                <p className='P'>{props.Artist}</p>
                <br/>
                <div>
                    <button onClick={start}><AiFillPlayCircle className='Icon'/></button>
                    <button onClick={stop}><AiFillPauseCircle className='Icon'/></button>
                </div>
            </div>
            
        </div>
    )
}
export default Player;