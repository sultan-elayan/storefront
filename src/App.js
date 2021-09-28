import './App.css';
import React from 'react';

import Header from "./components/header";
import Footer from "./components/footer";
import Products from "./components/products";
import Categories from './components/Categories';
// import SimpleCart from './components/SimpleCart';
function App () {
  return (
    <>

      <Header />
      {/* <SimpleCart/> */}
      <Categories/>
     <Products/>
      <Footer />
    </>
  );
}

export default App;
