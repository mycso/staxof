import styled from 'styled-components';

const StyledSubHeader = styled.div`
	
	.subheader-wrapper{
		position: fixed;
	    top: 99px;
	    right: 0;
	    left: 0;
	    z-index: 1030;
		background: ${props => props.theme.navyBlue};
		padding: 10px;
		a {
			color: ${props => props.theme.white};
			cursor: pointer;
			:hover{
				color: ${props => props.theme.white};
			}
		}

		span {
			color: ${props => props.theme.white};
		}
	}

	.subheader-inner {
    	margin: auto 27px;
	}

	@media (max-width: 700px) {
		.subheader-inner {
    		margin: auto 10px;
		}
	}
`;

export default StyledSubHeader;