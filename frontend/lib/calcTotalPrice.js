export default function calcTotalPrice(cart) {
    return cart.reduce((tally, cartItem) => {
      if (!cartItem.product) return tally;
      return tally + cartItem.quantity * cartItem.product.price;
  
      //---with delivery cost
      // return tally + cartItem.quantity * cartItem.item.price + cartItem.item.deliveryCost;
      //---with delivery cost
  
    }, 0);
  }
  