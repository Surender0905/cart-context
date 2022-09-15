import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCartShow, setIsCartShow] = useState(false);

  const showModal = () => {
    setIsCartShow(true);
  };

  const closeModal = () => {
    setIsCartShow(false);
  };
  return (
    <CartProvider>
      {isCartShow && <Cart onClose={closeModal} />}
      <Header onOpen={showModal} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
