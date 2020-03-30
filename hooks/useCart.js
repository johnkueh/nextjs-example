import { useContext, useState } from "react";

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const total = items.reduce((current, item) => {
    current = current + item.price;
    return current;
  }, 0);
  const addItem = item => {
    setItems([...items, item]);
  };
  const removeItem = item => {
    setItems(items.filter(addedItem => addedItem.id !== item.id));
  };

  return (
    <CartContext.Provider
      value={{
        items,
        total,
        addItem,
        removeItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
