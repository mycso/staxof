import styled from 'styled-components';

const SingleItemStyles = styled.div`
	.item-details{
		margin: 2rem auto;
		display: grid;
		grid-auto-columns: 1fr;
		grid-auto-flow: column;
		min-height: 800px;
		img{
			width: 100%;
			height: auto;
    		object-fit: contain;
    	// 		max-width: 1300%;
		//   	transition: transform 0.3s ease-in-out;
		
			@media (max-width: 768px) {
      			height: auto;
    		}
		}
	 	
	 	// img:hover {
		//   transform: scale(1.2);
		// }



		.carousel-item img[src=""] {
		  	display:none;

		}



		@media (max-width: 768px) {
      		grid-auto-flow: unset;
    	}
	}

	.carousel-item {
    	height: auto;
    }

    @media (max-width: 500px) {
		.carousel img {
		    width: 220%;
		    position: absolute;
		    left: 0;
		}

		.carousel-item {
		    height: auto;
		}
	}

	.nav-link {
    	display: block;
    	padding: 0;
    	font-size: 20px;
	}

	.details{
		margin: 3rem;
		font-size: 2rem;
		h2{
			color: ${props => props.theme.navyBlue};
			font-weight: bold;
		}
		p{
			font-size: 1.1rem;
		}

		@media (max-width: 768px) {
      		text-align: center;
      		margin: 0;
    	}

    	.dv-star-rating {
	    	display: inline !important;
	    	float: left;

	    	@media (max-width: 768px) {
	      		float: none;
	    	}

	    	.dv-star-rating-star {
	    		@media (max-width: 768px) {
	      			float: none !important;
	    		}
	  		}
	  	}

	  	.star-result {
	  		margin-left: 10px;
	  	}
	}

	button.react-slider__btnNext {
		margin: 20px;
		border-radius: 0px !important;
	}

	button.react-slider__btnPrev {
		margin: 20px;
		border-radius: 0px !important;
	}

	.react-slider__imgZoom {
		background-size: 2490px auto !important;
		height: 647px;
	}
`;

export default SingleItemStyles;