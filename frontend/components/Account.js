import NavLink from './Link'
import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { format } from 'date-fns';
import Head from 'next/head';
import gql from 'graphql-tag';
import formatMoney from '../lib/formatMoney';
import Error from './ErrorMessage';
import styled from 'styled-components';
import OrderStyles from './styles/OrderStyles';
import SubHeader from '../components/SubHeader';
import DeleteUser from './DeleteUser'; 

const SINGLE_ORDER_QUERY = gql`
	query SINGLE_ORDER_QUERY($id: ID!) {
		order(id: $id) {
			id
			charge
			total
			createdAt
			user {
				id
			}
			items {
				id
				title
				description
				price
				image
				quantity
			}
		}
	}
`;

const CURRENT_USER_QUERY = gql`
	query {
		me {
			id
			email
			name
			permissions
			cart {
				id
				quantity
				item {
					id
					price
					image
					title
					description
				}
			}

			order {
				id
				charge
				total
			}
		}
	}
`;

const StyledLinked = styled.div`

  	a {
    	color: ${props => props.theme.navyBlue};
  	}

  	a:hover {
    	color: ${props => props.theme.navyBlue};
    	text-decoration: none;
  	}

`;

class Account extends React.Component {
	static propTypes = {
		id: PropTypes.string.isRequired,
	};
	render() {
		return (
			<StyledLinked>
				<Query query={CURRENT_USER_QUERY} variables={{ id: this.props.id }}>
					{({ data, error, loading }) => {
						if (error) return <Error error={error} />;
						if (loading) return <p>Loading</p>;
						const user = data.me;
						const me = data ? data.me : null;

						return (
							
								<div>
									<SubHeader />
									<OrderStyles data-test="user">
										<p>
											<span>User ID:</span> 
											<span>{user.id}</span>
										</p>
										<p>
											<span>Email:</span>
											<span>{user.email}</span>
										</p>

										<p>
											<span>Account Action:</span>
											<span>
									        	<a><DeleteUser id={user.id}>Delete Account</DeleteUser></a>
									        </span>
										</p>
											{me && (
										      	<>
													<p>
														<span>Orders:</span>
												      	<span>
												      		<NavLink activeClassName='active' prefetch="true" href="/orders">
												        		<u><a href="">Purchased Orders</a></u>
												        	</NavLink>
													      	
												        </span>
											        </p>

											        {me.permissions.includes("ADMIN") && (
										     	  	<>
												        <p>
												        	<span>All User Permissions:</span>
													      	<span>
														        <NavLink activeClassName='active' prefetch="true" href="/permissions">
														        	<u><a href="">Permissions</a></u>
														        </NavLink>
														    </span>
														</p>
													</>
												    )}

													{/*<p>
											        	<span>Delivery Method:</span>
												      	<span>
													        <NavLink activeClassName='active' prefetch="true" href="/createDeliveryMethod">
													        	<a>Create Delivery</a>
													        </NavLink>
													    </span>
													</p>*/}
										        </>
			      							)}
								    	
									</OrderStyles>
								</div>
							
						);
					}}
					
				</Query>
			</StyledLinked>
		);
	}
}

export default Account;