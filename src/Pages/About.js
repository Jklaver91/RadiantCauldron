import "bootstrap/dist/css/bootstrap.min.css";
import '.././App.css';
import Dividerclear from '.././Assets/Logos/Dividerclear.png';

import AboutLitha from "../Components/About/AboutLitha";
import WhyIStarted from "../Components/About/WhyIStarted";
import RadiantGoals from "../Components/About/RadiantGoals";

function About() {
    return (
        <div>
            <img className='divider mt-3' src={Dividerclear} alt="Divider" />
            
            <AboutLitha></AboutLitha>
            
            <img className='divider' src={Dividerclear} alt="Divider" />
            
            <WhyIStarted></WhyIStarted>

            <img className='divider' src={Dividerclear} alt="Divider" />

            <RadiantGoals></RadiantGoals>

            <img className='divider' src={Dividerclear} alt="Divider" />

        </div>
    );
}

export default About;