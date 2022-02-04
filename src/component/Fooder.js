import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faMapMarkerAlt, faEnvelopeOpen, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';


function Fooder() {
  return (
    <div className='container-fluid' style={{ background: '#edf1ff' }}>
      <div className='container' style={{ paddingTop: '5%' }}>
        <div className='row'>

          <div className='col-md-4'>
            <div className='' style={{ marginTop: '-20px' }}><span className="r">R</span><span className="page_name">Ajon</span></div><br />
            Dolore erat dolor sit lorem vero amet. Sed sit lorem magna,
            ipsum no sit erat lorem et magna ipsum dolore amet erat.
            <div className='pt-2'> <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#d19c97' }} /> &nbsp; Paltan, Dhaka, Bangladesh.</div>
            <div className='pt-2'> <FontAwesomeIcon icon={faEnvelopeOpen} style={{ color: '#d19c97' }} /> &nbsp; rajonhossaindhaka@gmail.com.</div>
            <div className='pt-2'> <FontAwesomeIcon icon={faPhoneAlt} style={{ color: '#d19c97' }} /> &nbsp; +8801734802914</div>
          </div>

          <div className='col-md-3'>
            <div className='title pb-4 h5'><b> Quick Links </b> </div>
            <div className='title pb-2' role="button"> <FontAwesomeIcon icon={faChevronRight} /> Home</div>
            <div className='title pb-2' role="button"> <FontAwesomeIcon icon={faChevronRight} /> Our Shop</div>
            <div className='title pb-2' role="button"> <FontAwesomeIcon icon={faChevronRight} /> Shop Detail</div>
            <div className='title pb-2' role="button"> <FontAwesomeIcon icon={faChevronRight} /> Shopping Cart</div>
            <div className='title pb-2' role="button"> <FontAwesomeIcon icon={faChevronRight} /> Checkout</div>
            <div className='title pb-2' role="button"> <FontAwesomeIcon icon={faChevronRight} /> Contact Us</div>
          </div>

          <div className='col-md-2'>
            <div className='title pb-4 h5'><b> Quick Links </b> </div>
            <div className='title pb-2' role="button"> <FontAwesomeIcon icon={faChevronRight} /> Home</div>
            <div className='title pb-2' role="button"> <FontAwesomeIcon icon={faChevronRight} /> Our Shop</div>
            <div className='title pb-2' role="button"> <FontAwesomeIcon icon={faChevronRight} /> Shop Detail</div>
            <div className='title pb-2' role="button"> <FontAwesomeIcon icon={faChevronRight} /> Shopping Cart</div>
            <div className='title pb-2' role="button"> <FontAwesomeIcon icon={faChevronRight} /> Checkout</div>
            <div className='title pb-2' role="button"> <FontAwesomeIcon icon={faChevronRight} /> Contact Us</div>
          </div>

          <div className='col-md-3'>
            <div className='title pb-4 h5'><b> Newsletter </b> </div>
            <input type="text" className='fooderinput' placeholder="Your Name" />
            <input type="text" className='fooderinput' placeholder="Your Email" />
            <button className='fooderinput_btn'>Subscribe Now</button>
          </div>
          <hr />


        </div>
      </div>
    </div>
  );
}

export default Fooder;



