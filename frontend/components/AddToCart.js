import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { CURRENT_USER_QUERY } from './User';

const ADD_TO_CART_MUTATION = gql`
	mutation ADD_TO_CART_MUTATION($id: ID!) {
		addToCart(productId: $id) {
			id
		}
	}
`;

export default function AddToCart({ id }) {
    const [addToCart, { loading }] = useMutation(ADD_TO_CART_MUTATION, {
        variables: { id }, 
        refetchQueries: [{ query: CURRENT_USER_QUERY }],
    });
    
    return ( 
        <a>
            <button disabled={loading} type="button" onClick={addToCart} className="cart-btn">
                Add {loading && 'ing'} To Cart <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </a>
    )
}