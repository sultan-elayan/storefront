import superagent from 'superagent';

const productApi = 'https://appstore-a.herokuapp.com/products';
const catagoriesApi = 'https://appstore-a.herokuapp.com/categories';


export const getRemoteData = (activeCategory) => (dispatch) => {
  superagent.get(productApi).then(dataProds => {
    superagent.get(catagoriesApi).then(dataCat => {
      return dispatch(getAction({
        products: dataProds.body,
        categories: dataCat.body,
        activeCategory: activeCategory
      }))
    });
  });
}

export const changeActiveCategory = (activeCategory) => (dispatch) => {
  return dispatch(getActiveCategory(activeCategory))
}


const getAction = payload => {
  return {
    type: 'GET',
    payload: payload
  }
}


const getActiveCategory = payload => {
  return {
    type: "activeCategory",
    payload: payload
  }
}

export const putAction = payload => {
  return {
    type: 'PUT',
    payload: payload
  }
}
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


