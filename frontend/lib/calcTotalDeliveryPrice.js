export default function calcTotalDeliveryPrice(cart) {
  return cart.reduce((tally, cartItem) => {
  	console.log(cartItem);
    if (!cartItem.item) return tally;
    return tally + cartItem.quantity * cartItem.item.deliveryCost;
  }, 0);
}
