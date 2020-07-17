import React from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import Products from './components/Products';
import Cart from './components/Cart';
import Footer from './components/Footer';
function App (){
    return(
    <>
        <Header/>
        <Categories/>
        <Cart/>
        <Products/> 
        <Footer/>
    </>
    )
}
export default App;