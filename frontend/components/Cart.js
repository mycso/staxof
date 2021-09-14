import React, { Component } from 'react';
// import { useQuery, useApolloClient, useState } from '@apollo/react-hooks';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { adopt } from 'react-adopt';
import { useUser } from './User';
import styled from 'styled-components';
import User from './User';
import CartStyles from './styles/CartStyles';
import CartTitle from './styles/CartTitle';
import CloseButton from './styles/CloseButton';
import CartItem from './CartItem';
import Form from './styles/Form';
import calcTotalPrice from '../lib/calcTotalPrice';
// import calcTotalDeliveryPrice from '../lib/calcTotalDeliveryPrice';
import formatMoney from '../lib/formatMoney';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { 
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import TakeMyMoney from './TakeMyMoney';

const LOCAL_STATE_QUERY = gql`
	query {
		cartOpen @client
	}
`;

const TOGGLE_CART_MUTATION = gql`
	mutation {
		toggleCart @client
	}
`;

/* eslint-disable */
/* eslint-disable */

const Composed = adopt({
	user: ({ render }) => <User>{render}</User>,
	toggleCart: ({ render }) => <Mutation mutation={TOGGLE_CART_MUTATION}>{render}</Mutation>,
	localState: ({ render }) => <Query query={LOCAL_STATE_QUERY}>{render}</Query>,
});

/* eslint-enable */

// const international = 1100;
// const royalmail = 500;

const Cart = ({ cartItem }) => (

	<Composed>
		{({user, toggleCart, localState}) => {
		const me = user.data.me;
			
			if(!me) return null;

			return (
				<CartStyles open={localState.data.cartOpen}>
					<header>
						<CloseButton onClick={toggleCart} title="close"><FontAwesomeIcon icon={faTimes} /></CloseButton>
						<CartTitle>{me.email}'s Cart</CartTitle>
						<p>You have {me.cart.length} Item{me.cart.length === 1 ? '' : 's'} in your cart</p>
					</header>
					<ul>
						{me.cart.map(cartItem => 
							<CartItem key={cartItem.id} cartItem={cartItem} />
						)}
					</ul>

					<footer>

				    	{/*<div>
				    		Delivery Cost: {formatMoney(calcTotalDeliveryPrice(me.cart))}
				    	</div>*/}

						<div>
							<span>Total: {formatMoney(calcTotalPrice(me.cart))}</span>
						</div>

						<div>
							{me.cart.length > 0 && (
								<TakeMyMoney>
									<button id="buyIt" className="btn btn-success checkout" type="submit">Checkout <FontAwesomeIcon icon={faChevronRight} /></button>
								</TakeMyMoney>
							)}
						</div>
						
					</footer>
				</CartStyles>
			);
		}}
	</Composed>
);

export default Cart;
export { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION };