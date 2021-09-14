export default function calcTotalPrice(cart) {
  return cart.reduce((tally, cartItem) => {
    if (!cartItem.item) return tally;
    return tally + cartItem.quantity * cartItem.item.price;

    //---with delivery cost
    // return tally + cartItem.quantity * cartItem.item.price + cartItem.item.deliveryCost;
    //---with delivery cost

  }, 0);
}
