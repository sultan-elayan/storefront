
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
      let cart=[...state.cart,payload]
      return { cart:cart , show: state.show, cartTotal: state.cartTotal +1};


    case 'REMOVE':
      const product = state.cart.filter((product) => {
        return product.name !== payload.name;
      });
      let count = state.count - 1;
      return { cart: [...product], show: true, count: count };
      case 'GET':
        console.log("payload >>>> ", payload)

        return { ...state, categories: payload.categories, products: payload.products, activeCategory: "electronics" };
    case "activeCategory":
        return { ...state, activeCategory: payload }

    case "ADDTOCART":

        return { ...state, categories: payload.categories, products: payload.products, }
    case "REMOVEFROMCART":
        return;
    case 'PUT':
        return payload;

    default:
      return { ...state };
  }
}
