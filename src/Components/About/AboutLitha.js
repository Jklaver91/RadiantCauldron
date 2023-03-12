import "bootstrap/dist/css/bootstrap.min.css";
import '../../App.css';
import Card from 'react-bootstrap/Card';
import Litha1 from '../../Assets/Logos/pinklitha.jpg';

function AboutLitha() {
    return (
        <div>     
            <div className="my-3 rounded about container">
                <div className="row">
                   
                    <div className="col-md-7 text-left">
                        <Card.Title className="my-3 fs-1">About Litha!</Card.Title>
                        <Card.Text className="my-5 mx-5 fs-5">
                        My name is Litha! I'm a Pagan Witch that's been practicing Witchcraft for eight years. I've been a professional Tarot card reader for six years and have done thousands of readings on the hotlines, within my own business, and in person. I also have a few different Psychic abilities along with a strong intuition that guides me always. I created my business selling Spell Oils, Candles, Sprays, and more about three years ago. There is nothing more rewarding than sharing my creations with the world. I started going to events a year ago and it has created so many connections with fantastic people I now call friends.
                        </Card.Text>
                    </div>
                   
                        <Card.Img className="col-md-5 divider my-auto mx-auto p-2" src={Litha1} alt="Card image" />
                   
                </div>
            </div>
        </div>
    );
}

export default AboutLitha;