import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CURRENT_USER_QUERY } from './User';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faTimes,
} from '@fortawesome/free-solid-svg-icons';

const REMOVE_FROM_CART_MUTATION = gql`
	mutation removeFromCart($id: ID!) {
		removeFromCart(id: $id) {
			id
			quantity
		}
	}
`;

const RemoveButton = styled.button`
  font-size: 1.5rem;
  background: none;
  border: 0;
  color: ${props => props.theme.grey};
  &:hover {
    color: ${props => props.theme.red};
    cursor: pointer;
  }
`;

class RemoveFromCart extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };
  // This gets called as soon as we get a response back from the server after a mutation has been performed
  update = (cache, payload) => {
    // 1. first read the cache
    const data = cache.readQuery({ query: CURRENT_USER_QUERY });
    // 2. remove that item from the cart
    const cartItemId = payload.data.removeFromCart.id;
    data.me.cart = data.me.cart.filter(cartItem => cartItem.id !== cartItemId);
    // 3. write it back to the cache
    cache.writeQuery({ query: CURRENT_USER_QUERY, data });
  };
  render() {
    return (
      <Mutation
        mutation={REMOVE_FROM_CART_MUTATION}
        variables={{ id: this.props.id }}
        update={this.update}
        optimisticResponse={{
          __typename: 'Mutation',
          removeFromCart: {
            __typename: 'CartItem',
            id: this.props.id,
          },
        }}
      >
        {(removeFromCart, { loading, error }) => (
          <RemoveButton
            disabled={loading}
            onClick={() => {
              removeFromCart().catch(err => alert(err.message));
            }}
            title="Delete Item"
          >
          <FontAwesomeIcon icon={faTimes} />
          </RemoveButton>
        )}
      </Mutation>
    );
  }
}

export default RemoveFromCart;
export { REMOVE_FROM_CART_MUTATION };