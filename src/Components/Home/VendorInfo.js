//all of our assets and styling
import "bootstrap/dist/css/bootstrap.min.css";
import VendorBanner from '../../Assets/Logos/Vendor.png';
import '../../App.css';

function VendorInfo() {
    return (
        <div>
            <h1 className='text my-3'>Vendor Information!</h1>
            <a href='/vendor'><img className='event' src={VendorBanner} alt="Vendor" /></a>
        </div >
    );
}

export default VendorInfo;