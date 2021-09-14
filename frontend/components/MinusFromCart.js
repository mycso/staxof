import React from 'react';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faMinus,
} from '@fortawesome/free-solid-svg-icons';

const MINUS_FROM_CART_MUTATION = gql`
	mutation minusFromCart($id: ID!) {
		minusFromCart(id: $id) {
			id
			quantity
		}
	}
`;

const IconButton = styled.button`
  font-size: 1.5rem;
  background: none;
  border: 0;
  color: ${props => props.theme.grey};
  &:hover {
    color: ${props => props.theme.red};
    cursor: pointer;
  }
`;

class MinusFromCart extends React.Component {
	
	render() {
		const { id } = this.props;
		return ( 
			<Mutation 
				mutation={MINUS_FROM_CART_MUTATION} 
				variables={{
					id,
				}}
				refetchQueries={[{ query: CURRENT_USER_QUERY }]}
			>
				{(minusFromCart, {loading}) => 
					<a>
						<IconButton disabled={loading} onClick={minusFromCart}><FontAwesomeIcon icon={faMinus} /></IconButton>
					</a> 
				}
			</Mutation>
		);
	}
}
export default MinusFromCart;
export { MINUS_FROM_CART_MUTATION };