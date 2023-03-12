//all of our assets and component imports.
import Dividerclear from '.././Assets/Logos/Dividerclear.png';

import Banner from "../Components/Home/Banner";
import NexttEvent from '../Components/Home/NextEvent';
import CurrentEvent from "../Components/Home/CurrentEvent"
import EventCalendar from "../Components/Home/EventCalendar"
import VendorInfo from "../Components/Home/VendorInfo";
import Facebook from "../Components/Home/Facebook";

function Home() {
    return (
        <div>
            {/* The logo banner */}
            <Banner></Banner>

            <img className='divider' src={Dividerclear} alt="Divider" />
            
            {/* Current Event */}
            <NexttEvent></NexttEvent>
            <CurrentEvent></CurrentEvent>

            <img className='divider' src={Dividerclear} alt="Divider" />
            
            {/* Event Calender */}
            <EventCalendar></EventCalendar>

            <img className='divider' src={Dividerclear} alt="Divider" />
           
            {/* Vendor information */}
            <VendorInfo></VendorInfo>

            <img className='divider' src={Dividerclear} alt="Divider" />
            
            {/* Facebook info */}
            <Facebook></Facebook>

        </div >
    );
}

export default Home;