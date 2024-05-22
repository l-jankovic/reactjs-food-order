import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import { useState } from 'react';

function App() {

  const[cartIsShown,setCartIsShown]=useState(false);

  function showCartHandler(){
    setCartIsShown(true;)
  }

    function hideCartHandler(){
    setCartIsShown(true;)
  }
  return (
    <CartProvider>
      {cartIsShown && <div>Cart showing...</div>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
