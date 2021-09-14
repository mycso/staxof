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

const StyledCarousel = styled.div`
	
	.carousel img {
    	width: 100%;
    	@media (max-width: 767px) {
  			width: ${props => props.theme.carouselResponsiveWidth};
  			position: ${props => props.theme.carouselPosition};
  			left: ${props => props.theme.carouselLeft};
		}

		@media (max-width: 500px) {
		    width: 260%;
		    position: absolute;
		    left: -81%;
		}
	}

	.carousel-item {
	  height: auto;
      min-height: 500px;
	  background: no-repeat center center scroll;
	  -webkit-background-size: ${props => props.theme.carouselBg};
	  -moz-background-size: ${props => props.theme.carouselBg};
	  -o-background-size: ${props => props.theme.carouselBg};
	  background-size: ${props => props.theme.carouselBg};
      max-height: 900px;
	}

	.carousel-item:after {
	  content:"";
	  display:block;
	  position:${props => props.theme.carouselPosition} !important;
	  top:0;
	  bottom:0;
	  left:0;
	  right:0;
	  {/*background: rgba(96, 96, 96, 0.82);*/}
	  background: rgba(96, 96, 96, 0.61);
	  @media (max-width: 767px) {
  			width: ${props => props.theme.carouselResponsiveWidth} !important;
  			position: ${props => props.theme.carouselPosition} !important;
  			left: ${props => props.theme.carouselLeft} !important;
		}
	}
	.carousel-caption {
	    position: ${props => props.theme.carouselPosition} !important;
	    right: 15%;
	    bottom: 0px;
	    left: 15%;
	    z-index: 10;
	    padding-top: 2%;
	    padding-bottom: 10%;
	    color: #fff;
	    text-align: center;
	}

	.social-button-main {
	    position: ${props => props.theme.carouselPosition};
	    z-index: 1000;
	    top: 30px;
		right: 2px;
	}

	.social-button-main .svg-inline--fa {
	    font-size: 40px;
	    color: #fff;
		@media (max-width: 767px) {
  			font-size: 30px;
		}
	}

	.heading .display-4 {
		@media (max-width: 767px) {
  			font-size: 35px;
		}
	}

	.heading .display-5 {
		@media (max-width: 767px) {
  			font-size: 20px;
		}
	}

	.site-map-title {
		@media (max-width: 767px) {
		    border-top: 1px solid #fff;
		    padding-bottom: 0px;
		    width: 260px;
		    margin: 0 auto;
		}
	}

	.rounded-corner{
		border-radius: ${props => props.theme.roundedCorner} !important;	
	}

	button {
	    width: auto;
	    color: white;
	    background-color: ${props => props.theme.orange};
	    border: 0;
	    border-radius: ${props => props.theme.roundedCorner} !important;
	    font-size: 1rem;
	    padding: 0.7rem 1.2rem;
  	}
`;

const Carousel = () => (

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
		          <h3 className="display-5">Diverse book activity packs carefully created with budding young readers in mind!</h3>
		         	<br />
		               <ScrollTo>
		                {({ scrollTo }) => (
		                  <a onClick={() => scrollTo({ x: 20, y: 830, smooth: true })}><button className="btn btn-outline-light rounded-corner">Shop Now</button></a>
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

export default Carousel;