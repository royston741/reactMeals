import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from './store/cartProvider'

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCarthandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
    <div>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCarthandler}/>
      <main>
        <Meals />
      </main>
    </div>
    </CartProvider>
  );
}

export default App;
