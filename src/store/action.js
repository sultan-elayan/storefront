//actions

export const sendActiveCat = (activeCategory) => {
    return {
      type: "catagories",
      payload: activeCategory
    }
  }

export const increment = (product) => {
    // console.log("product11111111111111111111",product)
    return {
        type: 'INCREMENT',
        payload: product
        
    }
}

export const remove = (product) => {
    return {
        type: 'REMOVE',
        payload: product
    }
}

// export const reset = () => {
//     return {
//         type: 'RESET'
//     }
// }


