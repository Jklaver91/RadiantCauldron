// All of the assets needed
import "bootstrap/dist/css/bootstrap.min.css";
import '.././App.css';
import Dividerclear from '.././Assets/Logos/Dividerclear.png';
import CurrentEvent from "../Components/Home/CurrentEvent";
import GeneralForm from "../Components/Vendor/GeneralForm";

function Vendor() {
    return (
        // Information of current event
        <div>
            {/* Current Event */}
            <img className='divider' src={Dividerclear} alt="Divider" />
            <CurrentEvent></CurrentEvent>
            {/* Vendor Registraion */}
           <GeneralForm></GeneralForm>
            <img className='divider' src={Dividerclear} alt="Divider" />
        </div >
    );
}

export default Vendor;