import NavLink from './Link'
import { Mutation } from 'react-apollo';
import { TOGGLE_CART_MUTATION } from './Cart'
// import { TOGGLE_CART_GUEST_MUTATION } from './CartGuest'
import styled from 'styled-components';
import User from './User';
import Signout from './Signout';
import CartCount from './CartCount';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

const StyledHeader = styled.header`
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

	.navy-blue{
		color: ${props => props.theme.navyBlue};
	}

	.blue{
		color: ${props => props.theme.mainBlue};
	}

	.navbar .svg-inline--fa {
	    font-size: ${props => props.theme.fontSize};
	}

	.stax-logo {
    	max-width: ${props => props.theme.logoStaxWidth};
	}

	.multi-border-wrapper {
		top: 92px !important;
		padding:0;
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

	button:focus {
    	outline: none !important
	}

	.active:after {
		content: '';
	}
  	.navbar-light .navbar-nav .nav-link {
    	text-decoration: none;
    	padding: 10px !important;
    	display: block;
    	color: ${props => props.theme.navyBlue};
  	}
  	.nav-link.active {
    	color: ${props => props.theme.lightBlue} !important;
  	}
  	.nav-link.user.active {
    	color: ${props => props.theme.navyBlue} !important;
  	}

  	a {
  		cursor: pointer;
  	}
`;

const Nav = () => (
	
	<StyledHeader data-test="nav">
		<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top col-lg-12">
		  	<div className="container col-lg-12">
		  		<NavLink prefetch="true" href="/">
				    <a className="navbar-brand">
				    	<img className="stax-logo" src="/static/logo.png" />
				    </a>
				</NavLink>

				<User>
				{({ data }) => {
			      const me = data ? data.me : null

			      return (
				    <>
					<button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					    <span className="navbar-toggler-icon"></span>
					    
						{/*<CartCount count={me.cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0)}></CartCount>*/}
				  		{me && (
				  			<CartCount count={me.cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0)}></CartCount>
				  		)}
				  	</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						    <ul className="navbar-nav ml-auto mt-4 mt-lg-0">
						      <li className="nav-item">
						      	<NavLink activeClassName='active' prefetch="true" href="/items">
						        	<a className="nav-link">Home</a>
						        </NavLink>
						      </li>
						      <li className="nav-item">
						      	<NavLink activeClassName='active' prefetch="true" href="/AboutUs">
						        	<a className="nav-link">About Us</a>
						        </NavLink>
						      </li>
						      <li className="nav-item">
						      	<NavLink activeClassName='active' prefetch="true" href="/ContactUs">
							        <a className="nav-link">Contact Us</a>
							    </NavLink>
						      </li>
						      
						       {me && (
						      	<>

							      	{me.permissions.includes("ADMIN") && (
								     <>
								      <li className="nav-item">
								      	<NavLink activeClassName='active' prefetch="true" href="/Sell">
								        	<a className="nav-link">Sell a Book</a>
								        </NavLink>
								      </li>
								      </>
								    )}
							    
							      <li className="nav-item">
							      	<NavLink activeClassName='active' href="/orders">
							        	<a className="nav-link">Orders</a>
							        </NavLink>
							      </li>
									
								  <li className="nav-item">
							      	<NavLink activeClassName='active' prefetch="true" href="/account">
							        	<a className="nav-link">My Account</a>
							        </NavLink>
							      </li>
							     
							      <Mutation mutation={TOGGLE_CART_MUTATION}>
							      	{(toggleCart) => (
								      <li className="nav-item">
								      	<NavLink>
								        	<a className="cart-icon" onClick={toggleCart} className="nav-link"><FontAwesomeIcon icon={faShoppingCart} />
								        	<CartCount count={me.cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0)}></CartCount>
								        	</a>
								        </NavLink>
								      </li>
							      	)}
							      </Mutation>

							      <li className="nav-item">
							      	<NavLink activeClassName='active' prefetch="true" href="/items">
							        	<a className="nav-link"><Signout /></a>
							        </NavLink>
						          </li>
						      	</>
						      )}

						       {!me && (
								<>

							      <li className="nav-item">
							      	<NavLink activeClassName='active' prefetch="true" href="/signin">
							        	<a  className="nav-link">Sign In/Sign Up</a>
							        </NavLink>
							      </li>

							      {/*<Mutation mutation={TOGGLE_CART_MUTATION}>
							      	{(toggleCart) => (
								      <li className="nav-item">
								      	<NavLink>
								        	<a className="cart-icon" className="nav-link"><FontAwesomeIcon icon={faShoppingCart} />
								        	<CartCount count={me.cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0)}></CartCount>
								        	</a>
								        </NavLink>
								      </li>
							      	)}
						          </Mutation>*/}

						       	</>
						       )}
						    </ul>
							
						
				    </div>
				    </>
				    )
				}}
				</User>

		  	</div>	  
		</nav>

			<div className="multi-border-wrapper col-lg-12 px-0 fixed-top">
				<ul className="multi-border">
				    <li></li>
				    <li></li>
				    <li></li>
				    <li></li>
				    <li></li>
			  	</ul>
		  	</div>
  	</StyledHeader>
);

export default Nav;