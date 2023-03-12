//Email imports
import React from "react";
//Styling imports
import "bootstrap/dist/css/bootstrap.min.css";
import '../../App.css';
import Card from 'react-bootstrap/Card';
import fbgreen from '../../Assets/Logos/fbgreen.jpg'
import fbbrown from '../../Assets/Logos/fbbrown.jpg'

const FacebookCommunity = () => {
  
  return (
    <div>
      <div> 
        {/* facebook community */}
        <div className="row">
        <Card className="col-3 mx-auto concard" style={{ width: '18rem' }}>
        <Card.Link href="https://www.facebook.com/RadiantCauldron"><img className="mt-2" variant="top"  src={fbgreen} alt="facebook logo green"></img></Card.Link>
          <Card.Body>
            <Card.Title>Facebook Community Page!</Card.Title>
            <Card.Text>
              Come join our community page on facebook!
            </Card.Text>
          </Card.Body>
        </Card>

      {/* facebook vendors. */}
        <Card className="col-3 mx-auto concard" style={{ width: '18rem' }}>
            <Card.Link href="https://www.facebook.com/groups/radiantcauldronvendors/"><img className="mt-2" variant="top"  src={fbbrown} alt="facebook logo brown"></img></Card.Link>
          <Card.Body>
            <Card.Title>Facebook Vendor Page!</Card.Title>
            <Card.Text>
              Come join our community page for local vendors and readers!
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
      </div>
    </div >
  );
}

export default FacebookCommunity;