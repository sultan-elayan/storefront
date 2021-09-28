
// any data type
let initialState = {
  cart: [],
  show: false,
  cartTotal: 0
}
// reducer
export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {

    case 'INCREMENT':
      const products = state.cart.map((product) => product.name);
      if (!products.includes(payload.name)) {
        let cartTotal = state.cartTotal + 1;
        console.log("state.cartTotal-----------------", state.cartTotal)
        return { cart: [...state.cart, payload], show: true, cartTotal: cartTotal };
      }
      return { cart: state.cart, show: true, cartTotal: state.cartTotal };



    case 'REMOVE':
      const product = state.cart.filter((product) => {
        return product.name !== payload.name;
      });
      let count = state.count - 1;
      return { cart: [...product], show: true, count: count };


    default:
      return { ...state };
  }
}