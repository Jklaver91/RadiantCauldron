import "bootstrap/dist/css/bootstrap.min.css";
import '../../App.css';

import Card from 'react-bootstrap/Card';
import Litha2 from '../../Assets/Logos/greenlitha.jpg';

function WhyIStarted() {
    return (
        <div>
            <div className="my-3 rounded about container">
                <div className="row">
                   
                        <Card.Img className="col-md-5 float-left divider my-auto mx-auto py-2" src={Litha2} alt="Card image" />
                   
                    
                    <div className="col-md-7">
                        <Card.Title className="my-3 fs-1">Why I started Radiant Cauldron.</Card.Title>
                        <Card.Text className="my-5 mx-5 fs-5">
                        I started Radiant Cauldron because I didn't believe enough Metaphysical Events were going on. I wanted to see more witches and spiritualists connecting, finding their tribe, and enjoying local handmade goodies. I wanted to make supporting a small local metaphysical business easy. I also wanted to do certain things I hadn't seen at previous events I attended. In particular, creating a fantastic ambiance with music and decorations, as well as doing a bit more hands-on advertising like creating graphics for each vendor/reader and creating flyers to put up around Charlotte and the surrounding areas. I enjoy doing the legwork and that's why I find my event coordination to be a little unique. I love taking care of all of my vendors/readers, guiding them as much as I can. Creating clear instructions and quickly answering any questions they may have. I just want everyone to be happy! 
                        </Card.Text>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyIStarted;