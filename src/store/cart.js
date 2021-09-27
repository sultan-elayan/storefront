   
// any data type
let initialState = {
    cartTotal: 0
}
// reducer
export default (state = initialState, action) => {
    let {type, payload} = action;
    switch(type) {
        case 'INCREMENT':
     
            return state.map(product => {
              if (product.name == payload) {
                return { name: product.name, cartTotal: state.cartTotal + 1 }
              }
              return product;
            });
      
            case 'REMOVE':
            return state.map(product => {
              if (product.name == payload) {
                return { name: product.name, cartTotal: state.cartTotal - 1 }
              }
              return product;
            })
            default:
            return { ...state };
    }
}