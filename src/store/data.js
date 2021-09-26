
const initialState = {
    categories: [
      { name: 'electronics', displayName: 'Elecronics' },
      { name: 'food', displayName: 'Food' },
     
    ],
    products: [
        { name: 'OnePlus In-Ear', category: 'electronics', price: 200.00, inStock: 15,
        image:'https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_212,w_212/v1631606777/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/243050_ahyffr.png' },
        
        { name: 'Dell Inspiron', category: 'electronics', price: 699.00, inStock: 5,
          image:'https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_212,w_212/v1627025486/Croma%20Assets/Computers%20Peripherals/Laptop/Images/232338_xanjnq.png' },
        
          { name: 'Apple iPad mini 6 WiFi', category: 'electronics', price: 599.00, inStock: 7,
        image:'https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_212,w_212/v1631948742/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/243629_lrutmb.png' },
  
      { name: 'Super Chicken Shawarma Meal', category: 'food', price: 2.99 , inStock: 500,
        image:'https://images.deliveryhero.io/image/talabat/MenuItems/blob_637681679658891908' },
      { name: 'Italian Chicken Shawarma Meal', category: 'food', price: 2.99, inStock: 120,
        image:'https://images.deliveryhero.io/image/talabat/MenuItems/blob_637681683062002217' },
      { name: 'Steak Alfredo Meal', category: 'food', price: 3.9, inStock: 100,
        image:'https://images.deliveryhero.io/image/talabat/MenuItems/blob_637660246172843793' },
       
   
    ],
    activeCategory: 'electronics',
  };
  
export default (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case "catigories":
            if (payload.toLowerCase() == "electronics" || payload.toLowerCase() == "clothing"
             || payload.toLowerCase() == "food")
            {
              return {...state, activeCategory: payload }; 
            }
                
        default:
            return {...state};
    }

}
  
export const sendActiveCat = (activeCategory) => {
    return {
        // this object will be passed to the reducer 
        type: "catigories",
        payload: activeCategory
    }
}