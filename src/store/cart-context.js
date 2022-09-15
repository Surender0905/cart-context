import { createContext } from "react";

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addToCart: (item) => {},
  removeFromCart: (id) => {},
});

export default CartContext;
