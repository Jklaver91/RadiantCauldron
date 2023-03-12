//all of our assets and styling
import "bootstrap/dist/css/bootstrap.min.css";
import fbbrown from '../../Assets/Logos/fbbrown.jpg'
import '../../App.css';

function Facebook() {
    return (
        <div>
            <h1 className='text my-3'>Find us on Facebook!</h1>
            <a href='https://www.facebook.com/RadiantCauldron'><img className='mb-5 fb rounded' src={fbbrown} alt="facebook logo brown" /></a>
        </div >
    );
}

export default Facebook;