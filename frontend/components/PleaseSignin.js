import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from './User';
import Signin  from './Signin';

const PleaseSignIn = props => 

<Query query={CURRENT_USER_QUERY}>
	{({ data, loading }) => {
		if(loading) return <p>Loading...</p>
		if(!data.me){
			return (
				<div className="container">
					<br/>
					<p >
						<h3>Please Sign in before Continuing</h3>
					</p>
					<Signin />
					<br/>
				</div>
			);
		}
		return props.children;
	}}
</Query>

export default PleaseSignIn;