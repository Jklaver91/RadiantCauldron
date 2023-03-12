//all of our assets and styling
import "bootstrap/dist/css/bootstrap.min.css";
import '../../App.css';
import Event from '../../Assets/Logos/EventBanners/2023/CosmicCreatureFestival.png';

function CurrentEvent() {
    return (
        <div>
            {/* The logo banner */}
            <a href='/events'><img className='event' src={Event} alt="Divine" /></a>
        </div >
    );
}

export default CurrentEvent;