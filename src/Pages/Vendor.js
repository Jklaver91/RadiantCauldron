// All of the assets needed
import "bootstrap/dist/css/bootstrap.min.css";
import '.././App.css';
import Dividerclear from '.././Assets/Logos/Dividerclear.png';
import CurrentEvent from "../Components/Home/CurrentEvent";

function Vendor() {
    return (
        // Information of current event
        <div>
            {/* Current Event */}
            <img className='divider' src={Dividerclear} alt="Divider" />
            <CurrentEvent></CurrentEvent>
            {/* Vendor Registraion */}
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc-bgdPiqlhQu0UGlEp4dm94IkD4urPl_1x-ySqbT6j0hKobA/viewform?embedded=true" width="100%" height="2578" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            <img className='divider' src={Dividerclear} alt="Divider" />
        </div >
    );
}

export default Vendor;