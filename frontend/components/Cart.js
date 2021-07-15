import styled from 'styled-components';
import CartStyles from './styles/CartStyles';
import CartTitle from './styles/CartTitle';
import { useUser } from './User';
import { useCart } from '../lib/cartState';
import calcTotalPrice from '../lib/calcTotalPrice';
import CloseButton from './styles/CloseButton';

import formatMoney from '../lib/formatMoney';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faTimes,
} from '@fortawesome/free-solid-svg-icons';

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

function CartItem({ cartItem }) {
    const { product } = cartItem;
    if (!product) return null;
    // console.log(product);
    return (
        <CartItemStyles>
            <img 
                width="100" 
                src={product.photo.image.publicUrlTransformed} 
                alt={product.name} 
            />
            <div className="cart-item-details">
                <h3>{product.name}</h3>
                <p>
                    {formatMoney(product.price * cartItem.quantity)}
                    {/*{formatMoney(cartItem.quantity * cartItem.item.price + cartItem.item.deliveryCost)}*/}
                    {' - '}
                    <em>
                        {cartItem.quantity}
                        &times; {formatMoney(product.price)} each
                        {/*&times; {formatMoney(cartItem.item.price + cartItem.item.deliveryCost)} each*/}
                        {/*<p>Delivery Cost: {formatMoney(cartItem.item.deliveryCost * cartItem.quantity)}</p>*/}
                    </em>
                </p>
            </div>
        </CartItemStyles>
    );
}

export default function Cart() {
    const me = useUser();
    const { cartOpen, closeCart } = useCart();
    // console.log(cartOpen);
    if (!me) return (
        <CartStyles open={cartOpen}>
            <header>
                <CloseButton onClick={closeCart} title="close"><FontAwesomeIcon icon={faTimes} /></CloseButton>
                <CartTitle>My Cart</CartTitle>
            </header>
        </CartStyles>
    );
    console.log(me);
    
    return (
        <CartStyles open={cartOpen}>
            <header>
                <CloseButton onClick={closeCart} title="close"><FontAwesomeIcon icon={faTimes} /></CloseButton>
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

                {/* <div>
                    {me.cart.length > 0 && (
                        <TakeMyMoney>
                            <button id="buyIt" className="btn btn-success checkout" type="submit">Checkout <FontAwesomeIcon icon={faChevronRight} /></button>
                        </TakeMyMoney>
                    )}
                </div> */}
                
            </footer>
        </CartStyles>
    );
}