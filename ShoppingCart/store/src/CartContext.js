import { createContext, CreateContext, useState } from "react";
import { itemsInStock, getItemData } from "./items";

export const CartContext = createContext({
  items: [],
  getItemQuantity: () => {},
  addItemToCart: () => {},
  removeItemfromCart: () => {},
  clearItemFromCart: () => {},
  getTotalCost: () => {},
});

export function CartProvider({ children }) {
  const [itemsInCart, setCartItems] = useState([]);

  function getItemQuantity(id) {
    const quantity = itemsInCart.find((item) => item.id === id)?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  function addItemToCart(id) {
    const quantity = getItemQuantity(id);

    if (quantity === 0) {
      setCartItems([
        ...itemsInCart, // take all the items in cart and put them to the front of this array
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      setCartItems(
        itemsInCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    }
  }

  function clearItemFromCart(id) {
    setCartItems(
      (itemsInCart) =>
        itemsInCart.filter((currentItem) => {
          return currentItem.id !== id;
        }) // if id param matches id in cart do not add to new cart array
    );
  }

  function removeItemfromCart(id) {
    const quantity = getItemQuantity(id);
    if (quantity === 1) {
      clearItemFromCart(id);
    } else {
      setCartItems(
        itemsInCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  }

  function getTotalCost() {
    let totalCost = 0;
    itemsInCart.map((item) => {
      const itemData = getItemData(item.id);
      totalCost += (itemData.price * item.quantity);
    });
    
    return totalCost;
    
  }

  const contextValue = {
    items: itemsInCart,
    getItemQuantity,
    addItemToCart,
    removeItemfromCart,
    clearItemFromCart,
    getTotalCost,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
export default CartProvider;
