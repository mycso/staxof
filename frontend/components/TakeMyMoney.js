import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Mutation } from 'react-apollo';
import Router from 'next/router';
import NProgress from 'nprogress';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import CartStyles from './styles/CartStyles';
import calcTotalPrice from '../lib/calcTotalPrice';
import formatMoney from '../lib/formatMoney';
import Error from './ErrorMessage';
import User, { CURRENT_USER_QUERY } from './User';

const CREATE_ORDER_MUTATION = gql`
	mutation createOrder($token: String!) {
		createOrder(token: $token) {
			id
			charge
			total
			items {
				id
				title
			}
		}
	}
`;

// function totalItems(cart) {
// 	return cart.reduce((tally, cartItem) => tally + cartItem.quantity * cartItem.item.price + cartItem.item.deliveryCost, 0);
// }

function totalItems(cart) {
	return cart.reduce((tally, cartItem) => tally + cartItem.quantity * cartItem.item.price, 0);
}

class TakeMymoney extends React.Component {
	onToken = async (res, createOrder) => {
		NProgress.start()
		// manually call the mutation once we have the stripe token
		const order = await createOrder({
			variables: {
				token: res.id
			},
		}).catch(err => {
			alert(err.message);
		});
		console.log(createOrder)
		Router.push({
			pathname: '/order',
			query: { id: order.data.createOrder.id },
		})
	};

	render() {
		return (
			<User>
				{({ data: { me }, loading }) => {
				if(loading) return null;
				return (
					<Mutation
					mutation={CREATE_ORDER_MUTATION} 
					refetchQueries={[{ query: CURRENT_USER_QUERY }]}>
					{createOrder => (
						<StripeCheckout 
							amount={calcTotalPrice(me.cart)}
							description={`Order of ${formatMoney(totalItems(me.cart))} items!`}
							image={me.cart.length && me.cart[0].item && me.cart[0].item.image}
							stripeKey="pk_live_5LZMQxzqkd7Oz7MOQJCV5fqx00C6nInitL"
							// stripeKey="pk_test_lJw4vC96fbQWPRUPZ7pTrsd100KKkQ0fKR"
							shippingAddress
							billingAddress
							shippingMethods
							panelLabel="Total"
							currency="GBP"
							name={me.name}
							email={me.email}
							locale="auto"
							receipt_email={me.email}
							token={res => this.onToken(res, createOrder)}
						>
							{this.props.children}
						</StripeCheckout>
					)}
					</Mutation>
					)
				}}
			</User>
		);
	}
}


export default TakeMymoney;
export { CREATE_ORDER_MUTATION }; 