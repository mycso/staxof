import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';
// import { ScrollTo } from "react-scroll-to";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faFacebook,
    faTwitter,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';

const StyledFooter = styled.footer`
	.multi-border-wrapper-footer {
		z-index: -2;
	}

	.multi-border li:nth-child(1) {
  		background: ${props => props.theme.mainBlue};
	}

	.multi-border li:nth-child(2) {
  		background: ${props => props.theme.lightBlue};
	}

	.multi-border li:nth-child(3) {
  		background: ${props => props.theme.turquoise};
	}

	.multi-border li:nth-child(4) {
  		background: ${props => props.theme.yellow};
	}

	.multi-border li:nth-child(5) {
  		background: ${props => props.theme.orange};
	}

	ul.multi-border {
	  	list-style:none;
	  	width:100%;
	  	font-size:0;
	  	padding:0;
	}

	.multi-border li {
	  	display:inline-block;
	  	width:20%;
	  	height:7px;
	}
	
	#footer {
    	background: ${props => props.theme.grey};
	}

	.multi-border-wrapper-footer .multi-border {
	  	margin: 0;
	}

	section {
	    padding: 60px 0;
	}

	section .section-title {
	    text-align: center;
	    color: #007b5e;
	    margin-bottom: 50px;
	    text-transform: uppercase;
	}

	#footer h5{
	  	padding-left: 0px;
	    padding-bottom: 6px;
	    margin-bottom: 20px;
	    color:#ffffff;
	}

	#footer a {
	    color: #ffffff;
	    text-decoration: none !important;
	    background-color: transparent;
	    -webkit-text-decoration-skip: objects;
	}

	#footer .svg-inline--fa {
	    font-size: 40px;
	}

	#footer ul.social li{
	  	padding: 3px 0;
	}

	#footer ul.social li a i {
	    margin-right: 5px;
	  	font-size:25px;
	  	-webkit-transition: .5s all ease;
	  	-moz-transition: .5s all ease;
	  	transition: .5s all ease;
	}

	#footer ul.social li:hover a i {
	  	font-size:30px;
	  	margin-top:-10px;
	}

	#footer ul.social li a,
	#footer ul.quick-links li a{
	  	color: ${props => props.theme.white};
	  	cursor: pointer;
	}

	#footer ul.social li a:hover{
	  	color:#eeeeee;
	}

	#footer ul.quick-links li{
	  	padding: 3px 0;
	  	-webkit-transition: .5s all ease;
	  	-moz-transition: .5s all ease;
	  	transition: .5s all ease;
		z-index: -1;
	}

	#footer ul.quick-links li:hover{
	  	padding: 3px 0;
	 	margin-left:5px;
	  	font-weight:700;
	}

	#footer ul.quick-links li a i{
	  	margin-right: 5px;
	}

	#footer ul.quick-links li:hover a i {
	    font-weight: 700;
	}

	@media (max-width:767px){
	  #footer h5 {
	      padding-left: 0;
	      border-left: transparent;
	      padding-bottom: 0px;
	      margin-top: 20px;
	      margin-bottom: 10px;
	  }

	  .footer-logo {
	      text-align: ${props => props.theme.footerLogoResponsive};
	  }
	}
`;


export default function Footer() {
    return (
	<StyledFooter>
		<div className="multi-border-wrapper-footer col-lg-12 px-0">
			<ul className="multi-border">
			    <li></li>
			    <li></li>
			    <li></li>
			    <li></li>
			    <li></li>
		  	</ul>
	  	</div>
		<section id="footer">
			<div className="container">
				<div className="footer-logo my-2">
					<img className="stax-logo" src="/static/logo-white.png" />
				</div>
				<div className="row text-center text-xs-center text-sm-left text-md-left">
					<div className="col-xs-12 col-sm-4 col-md-4 site-map-title">
						<h5>Site Information</h5>
						<ul className="list-unstyled quick-links">
							<li>
								<Link activeClassName='active' href="/">
									<a>Home</a>
								</Link>
							</li>
							<li>
								<Link activeClassName='active' href="/AboutUs">
									<a>About Us</a>
								</Link>
							</li>
							<li>
								<Link activeClassName='active' href="/ContactUs">
									<a>Contact Us</a>
								</Link>
							</li>
							<li>
								<Link activeClassName='active' href="/signin">
									<a>Sign In/Sign Up</a>
								</Link>
							</li>
						</ul>
					</div>
					<div className="col-xs-12 col-sm-4 col-md-4 site-map-title">
						<h5>Quick links</h5>
						<ul className="list-unstyled quick-links">
							<li>
								<Link activeClassName='active' href="https://www.instagram.com/staxofstories/">
									<a target="_blank">Insta Feed</a>
								</Link>
							</li>
							<li>
								<Link activeClassName='active' href="/">
									<a>Shop</a>
								</Link>
							</li>
						</ul>
					</div>
					<div className="col-xs-12 col-sm-4 col-md-4 site-map-title">
						<h5>Other</h5>
						<ul className="list-unstyled quick-links">
							<li>
								<Link activeClassName='active' href="/privacyPolicy">
									<a>Privacy/Policy</a>
								</Link>
							</li>
							<li>
								<Link activeClassName='active' href="/termsConditions">
									<a>Terms &amp; Conditions</a>
								</Link>
							</li>
							<li>
								<Link activeClassName='active' href="/shippingReturns">
									<a>Shipping &amp; Returns</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
						<ul className="list-unstyled list-inline social text-center">
							<li className="list-inline-item"><a href="https://www.facebook.com/staxofstories/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a></li>
							{/*<li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>*/}
							<li className="list-inline-item"><a href="https://www.instagram.com/staxofstories/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
						</ul>
					</div>
				</div>	
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
						<p className="h6">All rights Reserved.<span> &copy; Stax Of Stories</span></p>
						<p className="h6"><span>Designed &amp;
						 Developed By Michael Sokan</span></p>
					</div>
				</div>	
			</div>
		</section>
  	</StyledFooter>
    );
}