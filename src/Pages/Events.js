// Styling imports
import "bootstrap/dist/css/bootstrap.min.css";
import '.././App.css';
import Dividerclear from '.././Assets/Logos/Dividerclear.png';
import NewestEventDate from '../Components/Events/NewestEventDate'

function Events() {
    return (
        // Current Event
        <div>
            <img className='divider' src={Dividerclear} alt="Divider" />

            <NewestEventDate></NewestEventDate>
            
            <img className='divider' src={Dividerclear} alt="Divider" />
        </div >
        // Future Events go below
    );
}

export default Events;