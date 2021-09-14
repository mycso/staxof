import styled from 'styled-components';

const SplashImage = styled.div`
	.carousel-item:after {
	  content:"";
	  display:block;
	  position:${props => props.theme.carouselPosition} !important;
	  top:0;
	  bottom:0;
	  left:0;
	  right:0;
	  background: rgba(96, 96, 96, 0.61);
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

`;

export default SplashImage;