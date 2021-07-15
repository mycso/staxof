import Link from 'next/link';
import StyledCarousel from './styles/CarouselStyles';
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

export default function HomeCarousel() {
  return (
    <StyledCarousel>
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
		          {/*<li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>*/}
		          <li className="list-inline-item"><a href="https://www.instagram.com/staxofstories/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
		        </ul>
		      </div>
		    </div> 
		    <div className="carousel-inner" role="listbox">
		      <div className="carousel-item active">
		      	<img src="/static/landing-pic.jpeg" />
		        <div className="carousel-caption heading d-md-block"> 
		          <h2 className="display-4">Welcome to Stax Of Stories!</h2>
		          <h3 className="display-5">Diverse book gift boxes carefully created with budding young readers in mind!</h3>
		         	<br />
		               <ScrollTo>
		                {({ scroll }) => (
		                  <a onClick={() => scroll({ x: 20, y: 830, smooth: true })}><button className="btn btn-outline-light rounded-corner">Shop Now</button></a>
		                )}
		               </ScrollTo>
		          	<br />
		          <FontAwesomeIcon icon={faArrowDown} />
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
	  </StyledCarousel>
  );
}
