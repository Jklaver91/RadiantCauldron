//all of our assets and styling
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from '.././Assets/Logos/Base.png';
import Dividerclear from '.././Assets/Logos/Dividerclear.png';
import '.././App.css';
import Divine from '.././Assets/Logos/Divine.png';
import fbbrown from '.././Assets/Logos/fbbrown.jpg'
import VendorBanner from '.././Assets/Logos/Vendor.png';
import Card from 'react-bootstrap/Card';
import { Container } from "react-bootstrap";

function Home() {
    return (
        <div>
            {/* The logo banner */}
            <img src={Logo} alt="Logo" />
            <img className='divider' src={Dividerclear} alt="Divider" />
            {/* Current Event */}
            <h1 className='text my-3'>Join us at our next market!</h1>
            <a href='/events'><img className='event' src={Divine} alt="Divine" /></a>
            <img className='divider' src={Dividerclear} alt="Divider" />
            {/* Event Calender */}
            <div className="mx-5">
                <div class="container-fluid rounded featured">
                    <div class="row mx-auto">
                        <div className="col-lg-5 col-sm-12 my-5">
                        <img className='dividerclear' src={Dividerclear} alt="Divider" />
                            <h1>Featured Events</h1>
                            <img className='dividerclear' src={Dividerclear} alt="Divider" />
                        </div>
                        <div class="col-lg-3 col-sm-12">
                            <Card className="mx-auto my-3 fcard" style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Link className="text-decoration-none eventlink" href="https://www.facebook.com/events/764949961766476/?acontext=%7B%22ref%22%3A%2252%22%2C%22action_history%22%3A%22[%7B%5C%22surface%5C%22%3A%5C%22share_link%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22share_link%5C%22%2C%5C%22extra_data%5C%22%3A%7B%5C%22invite_link_id%5C%22%3A1141564776485509%7D%7D]%22%7D">Roosterpalooza, The Rooster. Feb. 18th 11am-4pm</Card.Link>
                                </Card.Body>
                            </Card>
                            <Card className="mx-auto my-3 fcard" style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Link className="text-decoration-none eventlink" href="/events">Radiant Cauldron, CLT Hub. Feb. 26th 10am-4pm</Card.Link>
                                </Card.Body>
                            </Card>
                            <Card className="mx-auto my-3 fcard" style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Link className="text-decoration-none eventlink" href="https://www.facebook.com/events/417892930551679/?acontext=%7B%22ref%22%3A%2252%22%2C%22action_history%22%3A%22[%7B%5C%22surface%5C%22%3A%5C%22share_link%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22share_link%5C%22%2C%5C%22extra_data%5C%22%3A%7B%5C%22invite_link_id%5C%22%3A1140683403257465%7D%7D]%22%7D">Springtime Blooms Ancient Elm, . Mar. 4th 10am-4pm</Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                        <div class="col-lg-3 col-sm-12">
                            <Card className="mx-auto my-3 fcard" style={{ width: '18rem' }}>
                                <Card.Body>
                                <Card.Link className="text-decoration-none eventlink" href="https://www.facebook.com/events/1177687696084765/?acontext=%7B%22ref%22%3A%2252%22%2C%22action_history%22%3A%22[%7B%5C%22surface%5C%22%3A%5C%22share_link%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22share_link%5C%22%2C%5C%22extra_data%5C%22%3A%7B%5C%22invite_link_id%5C%22%3A503123615289012%7D%7D]%22%7D">Enchanted Bazaar, Petty Thieves Brewing. Apr. 15th 12am-6pm</Card.Link>
                                </Card.Body>
                            </Card>
                            <Card className="mx-auto my-3 fcard" style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Link className="text-decoration-none eventlink" href="https://www.facebook.com/events/749844540055030/?acontext=%7B%22ref%22%3A%2252%22%2C%22action_history%22%3A%22[%7B%5C%22surface%5C%22%3A%5C%22share_link%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22share_link%5C%22%2C%5C%22extra_data%5C%22%3A%7B%5C%22invite_link_id%5C%22%3A749576710211194%7D%7D]%22%7D">Beltane Brouhaha, May. 5th-7th</Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <img className='divider' src={Dividerclear} alt="Divider" />
            {/* Vendor information */}
            <h1 className='text my-3'>Vendor Information!</h1>
            <a href='/vendor'><img className='event' src={VendorBanner} alt="Vendor" /></a>
            <img className='divider' src={Dividerclear} alt="Divider" />
            {/* Facebook info */}
            <h1 className='text my-3'>Find us on Facebook!</h1>
            <a href='https://www.facebook.com/RadiantCauldron'><img className='mb-5 fb rounded' src={fbbrown} alt="facebook logo brown" /></a>

        </div >
    );
}

export default Home;