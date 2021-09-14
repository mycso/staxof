import NavLink from './Link'
import StyledSubHeader from './styles/SubHeaderStyles';
import User from './User';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faTruck,
} from '@fortawesome/free-solid-svg-icons';

const SubInfo = () => (
	<StyledSubHeader>
	  <div className="subheader-wrapper">
		  	<div className="subheader-inner">
		  		<User>
				{({ data: { me } }) => (
				    <ul className="navbar-nav ml-auto mt-lg-0">
				      {me && (
				      	<>
				      	  <li>
				      	  	<NavLink prefetch="true" href="/account">
						      	<span>
						        	<a className="float-left">Hi, {me.email}</a>
						        </span>
						    </NavLink>
					      </li>
					     </>
					    )
					  }	
					  {!me && (
				      	<>
				      	  <li>
				      	  	<NavLink activeClassName='active' prefetch="true" href="/signup">
					      		<span>
					        		<a href="/signup" className="float-left">Sign in/Sign up for FREE</a>

					        		<span className="float-right"><FontAwesomeIcon icon={faTruck} /> FREE UK Delivery</span>
					        	</span>
					        </NavLink>
					      </li>
					     </>
					    )
					  }	

					</ul>
				)}
				</User>
		    </div>
	  </div>
  	</StyledSubHeader>
)

export default SubInfo;
