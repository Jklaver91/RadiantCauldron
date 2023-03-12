import "bootstrap/dist/css/bootstrap.min.css";
import '../../App.css';
import Card from 'react-bootstrap/Card';
import Litha3 from '../../Assets/Logos/lithaHorse.jpg';

function RadiantGoals() {
    return (
        <div>
            <div className="my-3 rounded about container">
                <div className="row">
                    
                    <div className="col-md-7 text-left">
                        <Card.Title className="my-3 fs-1">Goals with Radiant Cauldron!</Card.Title>
                        <Card.Text className="my-5 mx-5 fs-5">
                        My ultimate goal with Radiant Cauldron is to curate the largest metaphysical events of Charlotte, no, North Carolina! I'd love to bring together fantastic and skilled vendors and readers and give them a place where they can truly thrive. My connections and event coordinator skills will only grow from here. I hope everyone's just as excited as me to see where this will go, what we can accomplish, and how we will thrive together.
                        </Card.Text>
                    </div>
    
                        <Card.Img className="col-md-5 divider my-auto mx-auto p-2" src={Litha3} alt="Card image" />
                   
                </div>
            </div>
        </div>
    );
}

export default RadiantGoals;