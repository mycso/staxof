import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

const ADD_TO_CART_MUTATION = gql`
	mutation addToCart($id: ID!) {
		addToCart(id: $id) {
			id
			quantity
		}
	}
`;

class AddToCart extends React.Component {
	render() {
		const { id } = this.props;
		return ( 
			<Mutation 
				mutation={ADD_TO_CART_MUTATION} 
				variables={{
					id,
				}}
				refetchQueries={[{ query: CURRENT_USER_QUERY }]}
			>
				{(addToCart, {loading}) => 
					<a>
						<button disabled={loading} onClick={addToCart} className="cart-btn">Buy{loading && 'ing'} Item <FontAwesomeIcon icon={faShoppingCart} /></button>
					</a> 
				}
			</Mutation>
		);
	}
}
export default AddToCart;
export { ADD_TO_CART_MUTATION };