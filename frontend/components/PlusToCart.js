import React from 'react';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faPlus,
} from '@fortawesome/free-solid-svg-icons';

const PLUS_TO_CART_MUTATION = gql`
	mutation plusToCart($id: ID!) {
		plusToCart(id: $id) {
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

class PlusToCart extends React.Component {
	render() {
		const { id } = this.props;
		return ( 
			<Mutation 
				mutation={PLUS_TO_CART_MUTATION} 
				variables={{
					id,
				}}
				refetchQueries={[{ query: CURRENT_USER_QUERY }]}
			>
				{(plusToCart, {loading}) => 
					<a>
						<IconButton disabled={loading} onClick={plusToCart}><FontAwesomeIcon icon={faPlus} /></IconButton>
					</a> 
				}
			</Mutation>
		);
	}
}
export default PlusToCart;
export { PLUS_TO_CART_MUTATION };