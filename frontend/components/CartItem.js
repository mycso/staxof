import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import formatMoney from '../lib/formatMoney';
import PriceTag from './styles/PriceTag';
import PlusToCart from './PlusToCart';
import MinusFromCart from './MinusFromCart';
import RemoveFromCart from './RemoveFromCart';

const CartItemStyles = styled.li`
	padding: 1rem 0;
	border-bottom: 0.5px solid ${props => props.theme.grey};
	display: grid;
	align-items: center;
	grid-template-columns: auto 1fr auto;
	img {
		margin-right: 10px;
	}
	h3,
	p {
		margin: 0;
	}

	@media (max-width: 1214px) {
    	grid-template-columns: 1fr;
  	}
`;

const CartItem = ({ cartItem }) => { 
	// First Check if that item exists
	if(!cartItem.item) 
	return (
		<CartItemStyles>
			<p>This item is currently out of stock</p>
			<RemoveFromCart id={cartItem.id} />
		</CartItemStyles>
	);

	if(cartItem.item) {
		return ( 

			<CartItemStyles>
				<img width="100" src={cartItem.item.image} alt={cartItem.item.title} />
				<div className="cart-item-details">
					<h3>{cartItem.item.title}</h3>
					<p>
						{formatMoney(cartItem.quantity * cartItem.item.price)}
						{/*{formatMoney(cartItem.quantity * cartItem.item.price + cartItem.item.deliveryCost)}*/}
						{' - '}
						<em>
							{cartItem.quantity}
							&times; {formatMoney(cartItem.item.price)} each
							{/*&times; {formatMoney(cartItem.item.price + cartItem.item.deliveryCost)} each*/}
							{/*<p>Delivery Cost: {formatMoney(cartItem.item.deliveryCost * cartItem.quantity)}</p>*/}
						</em>
					</p>
				</div>
				
				<span>
					<PlusToCart id={cartItem.item.id} />
					<PriceTag>{cartItem.quantity}</PriceTag>
					<MinusFromCart prefetch id={cartItem.item.id} />
					<RemoveFromCart prefetch id={cartItem.id} />
				</span>
			</CartItemStyles>

		);
	}
};

CartItem.propTypes = {
	cartItem: PropTypes.object.isRequired,
};

export default CartItem;