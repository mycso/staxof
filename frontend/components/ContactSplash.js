import Link from 'next/link';
import styled from 'styled-components';

import { ScrollTo } from "react-scroll-to"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faArrowDown,
} from '@fortawesome/free-solid-svg-icons';

import { 
    faFacebook,
    faTwitter,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';

import SplashImage from './styles/SplashImageStyles';
import SubHeader from '../components/SubHeader';

const StyledContactSplash = styled.div`

	.adorable-blur {
		background-image: url('static/adorable-blur.jpg');
		background-size: cover;
		width: 100%;
		height: 100%;
		background-position: center;
	}

`;

const ContactSplash = () => (
	<SplashImage>
		<StyledContactSplash>
			<SubHeader />
			<div>
			  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
			    <ol className="carousel-indicators d-none">
			      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
			      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
			      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
			    </ol>
			    <div className="social-button-main">
			      <div className="col-xs-12 col-sm-12 col-md-12">
			        <ul className="list-unstyled list-inline social text-center">
			          <li className="list-inline-item"><a href="https://www.facebook.com/staxofstories/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a></li>
			          <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
			          <li className="list-inline-item"><a href="https://www.instagram.com/staxofstories/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
			        </ul>
			      </div>
			    </div> 
			    <div className="carousel-inner" role="listbox">
			      <div className="carousel-item active">
			      	<div class="adorable-blur"></div>
			        <div className="carousel-caption heading d-md-block"> 
			          <h2 className="display-4">Contact Us!</h2>
			          <h3 className="display-5">We are just a call away from you.</h3>
			        </div>
			      </div>
			    </div>
			    <a className="carousel-control-prev d-none" href="#carouselExampleIndicators" role="button" data-slide="prev">
			      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
			      <span className="sr-only">Previous</span>
			    </a>
			    <a className="carousel-control-next d-none" href="#carouselExampleIndicators" role="button" data-slide="next">
			      <span className="carousel-control-next-icon" aria-hidden="true"></span>
			      <span className="sr-only">Next</span>
			    </a>
			  </div>
		  	</div>
	  	</StyledContactSplash>
	</SplashImage>
);

export default ContactSplash;