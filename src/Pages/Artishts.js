import './artists.css'
import MartinGarrix from '../Components/ArtistImages/MartinGarrix.jpeg';
import Bonn from '../Components/ArtistImages/Bonn.jpeg';
import JohnMartin from '../Components/ArtistImages/JohnMartin.jpeg';
import Afrojack  from '../Components/ArtistImages/Afrojack.jpeg';
import Avicii from '../Components/ArtistImages/Avicii.jpeg'
import SandroCavazza from '../Components/ArtistImages/SandroCavazza.jpeg'
import GlassAnimals from '../Components/ArtistImages/GlassAnimals.jpeg'

function Artists(){
    return(
        <div className="Containir">
            <ul className='List'>
                <h1 className='h1'>Artists</h1>
                <li className='ListItem'>
                    <img src={MartinGarrix} alt='name' height={100} className='ArtistPhoto'/>
                    <h2 className='Artistname'>Martin Garrix</h2>
                </li>
                <li className='ListItem'>
                    <img src={Bonn} alt='artist' height={100} className='ArtistPhoto'/>
                    <h2 className='Artistname'>Bonn</h2>
                </li>
                <li className='ListItem'>
                    <img src={JohnMartin} alt='artist' height={100} className='ArtistPhoto'/>
                    <h2 className='Artistname'>John Martin</h2>
                </li>
                <li className='ListItem'>
                    <img src={Afrojack} alt='artist' height={100} className='ArtistPhoto'/>
                    <h2 className='Artistname'>AFROJACK</h2>
                </li>
                <li className='ListItem'>
                    <img src={Avicii} alt='artist' height={100} className='ArtistPhoto'/>
                    <h2 className='Artistname'>Avicii</h2>
                </li>
                <li className='ListItem'>
                    <img src={SandroCavazza} alt='artist' height={100} className='ArtistPhoto'/>
                    <h2 className='Artistname'>Sandro Cavazza    </h2>
                </li>
                <li className='ListItem'>
                    <img src={GlassAnimals} alt='artist' height={100} className='ArtistPhoto'/>
                    <h2 className='Artistname'>Glass Animals</h2>
                </li>
            </ul>
        </div>
    )
}
export default Artists