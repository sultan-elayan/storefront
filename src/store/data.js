// data
const initialState = {
  categories: [
    { name: 'Electronics', displayName: 'ELECTRONICS', dis: "Dasdsdsd" },
    { name: 'Food', displayName: 'FOOD', dis: "Dasdsdsd" },

  ],
  products: [
    {
      name: 'OnePlus In-Ear', category: 'Electronics', price: 200.00, inStock: 15, description: " Truly Wireless Earbuds with Mic (Bluetooth 5.2, Buds Pro, Glossy White)",
      image: 'https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_212,w_212/v1631606777/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/243050_ahyffr.png'
    },

    {
      name: 'Dell Inspiron', category: 'Electronics', price: 699.00,  inStock: 5, description: "Core i5 11th Gen Windows 10 Home Notebook (8GB RAM, 1TB HDD + 256GB SSD,NVIDIA GeForce MX330 + 2GB Graphics, MS Office, 39.62cm, Soft Mint)",
      image: 'https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_212,w_212/v1627025486/Croma%20Assets/Computers%20Peripherals/Laptop/Images/232338_xanjnq.png'
    },

    {
      name: 'Apple iPad mini 6 WiFi', category: 'Electronics', price: 599.00 , inStock: 7, description: " 5G iPadOS Tablet (iPadOS 15 Apple A15 Bionic Chip 21.08cm (8.3 Inches) 256GB ROM, MLX93HN/A, Pink)",
      image: 'https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_212,w_212/v1631948742/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/243629_lrutmb.png'
    },

    {
      name: 'Sony Bravia', category: 'Electronics', price: 999.00 ,  inStock: 5, description: " X75 Series 108cm (43 Inch) Ultra HD 4K LED Android Smart TV (Dolby Audio & Alexa Compatibility, KD-43X75, Black)",
      image: 'https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_350,w_350/v1625208340/Croma%20Assets/Entertainment/Television/Images/234280_hmfqcv.png'
    },

    {
      name: 'Super Chicken Shawarma Meal', category: 'Food', price: 2.99,  inStock: 500, description: "Chicken Shawarma with potato",
      image: 'https://images.deliveryhero.io/image/talabat/MenuItems/blob_637681679658891908'
    },
    {
      name: 'Italian Chicken Shawarma Meal', category: 'Food', price: 2.99,  inStock: 120, description: "Chicken Shawarma",
      image: 'https://images.deliveryhero.io/image/talabat/MenuItems/blob_637681683062002217'
    },
    {
      name: 'Steak Alfredo Meal', category: 'Food', price: 3.9,  inStock: 100, description: "Meat with dough with sauce",
      image: 'https://images.deliveryhero.io/image/talabat/MenuItems/blob_637660246172843793'
    },
    {
      name: 'Kibbeh', category: 'Food', price: 2.99,  inStock: 100, description: "Fried bulgur with meat",
      image: 'https://images.deliveryhero.io/image/talabat/MenuItems/blob_637599759879133845'
    },
  ],
  activeCategory: 'Electronics',
};

// reducer
export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case "catagories":
      if (payload == "Electronics" || payload == "Food") {
        return { ...state, activeCategory: payload };
      }

    case 'INCREMENT':
      state.products = state.products.map((product) => {
        if (product.name === payload.name) {
          if (product.inStock > 0) {
            product.inStock = product.inStock - 1;
          }
          // console.log("product---------------------",product)
          return product;
        }
        return product;
      });
      return { ...state };


      case 'REMOVE':
        state.products = state.products.map((product) => {
          if (product.name === payload.name) {
            product.inStock = product.inStock + 1;
  
            return product;
          }
          return product;
        });
        return { ...state };


    default:
      return { ...state };
  }

}

