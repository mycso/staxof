import PropTypes from 'prop-types';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';

const theme = {
  navyBlue: '#1b1464',
  mainBlue: '#0071bc',
  lightBlue: '#29abe2',
  turquoise: '#00a99d',
  yellow: '#fcee21',
  orange: '#f15a24',
  lightOrange: '#f7931e',
  lightPink: '#ed1e79',
  pink: '#d4145a',
  lightgrey: '#bcbcbc',
  transparent: 'transparent',
  grey: '#606060',
  green: '#218838',
  white: '#ffffff',
  maxWidth: '1200px',
  fontSize: '20px',
  logoStaxWidth: '160px',
  carouselResponsiveWidth: '170%',
  carouselPosition: 'absolute',
  carouselLeft: '-36%',
  carouselBg:'cover',
  footerLogoResponsive: 'center',
  roundedCorner: '3.25rem'
};

const GlobalStyles = createGlobalStyle`
  background: ${props => props.theme.white};
  color: ${props => props.theme.grey};
  margin-top: 150px;

  @font-face {
    font-family: 'Questrial';
		src: url('/static/questrial-v8-latin-regular.woff2')
		format('woff2')
		font-weight normal;
		font-style: normal;
  }

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 151px 0 0 0;
    line-height: 2;
    font-family: 'Questrial', sans-serif;
  }

  button {
    border-radius: ${props => props.theme.roundedCorner} !important;
    padding: 5px;
    border: 0;
  }

  button:focus {
      outline: 0px;
  }

  .active a.blue {
    text-decoration: none;
      color: ${theme.mainBlue};
  }

  .carousel img {
      width: 100%;
      @media (max-width: 767px) {
        width: ${props => props.theme.carouselResponsiveWidth};
        position: ${props => props.theme.carouselPosition};
        left: ${props => props.theme.carouselLeft};
    }

    @media (max-width: 500px) {
        width: 220%;
        position: absolute;
        left: -61%;
    }
  }

  .text-content {
      white-space: pre-wrap;
  }

  .ellipsis {
      height: auto;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 350px;
      overflow: hidden;
  }

  .carousel-item {
    height: 70vh;
    min-height: 400px;
    background: no-repeat center center scroll;
    -webkit-background-size: ${props => props.theme.carouselBg};
    -moz-background-size: ${props => props.theme.carouselBg};
    -o-background-size: ${props => props.theme.carouselBg};
    background-size: ${props => props.theme.carouselBg};
    max-height: 800px !important;
  }

  .carousel-item:after {
    content:"";
    display:block;
    position:${props => props.theme.carouselPosition} !important;
    top:0;
    bottom:0;
    left:0;
    right:0;
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
      bottom: 20px;
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
        border-top: 0.1px solid #fff;
        padding-bottom: 0px;
        width: 260px;
        margin: 0 auto;
    }
  }
`;

const StyledPage = styled.div`
	background: ${props => props.theme.white};
	color: ${props => props.theme.grey};
    margin-top: 150px;
`;

export default function Page({ children }) {
  return (
    <ThemeProvider theme={theme}>
        <Meta />
        <div>
          <GlobalStyles />
          <Header />
          {/* <SubHeader /> */}
          <StyledPage>{children}</StyledPage>
          <Footer />
        </div>
    </ThemeProvider>
  );
}

Page.propTypes = {
  cool: PropTypes.string,
  children: PropTypes.any,
};
