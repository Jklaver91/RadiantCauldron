//all of our assets and styling
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from '../../Assets/Logos/Base.png';
import '../../App.css';

function Banner() {
    return (
        <div>
            {/* The logo banner */}
            <img src={Logo} alt="Logo" />
        </div >
    );
}

export default Banner;