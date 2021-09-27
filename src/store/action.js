//actions

export const sendActiveCat = (activeCategory) => {
    return {
      type: "catagories",
      payload: activeCategory
    }
  }

export const increment = (name) => {
    return {
        type: 'INCREMENT',
        payload: name
    }
}

export const remove = (name) => {
    return {
        type: 'REMOVE',
        payload: name
    }
}

// export const reset = () => {
//     return {
//         type: 'RESET'
//     }
// }


