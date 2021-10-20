import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartContextUse = () => {
  return useContext(CartContext);
};

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  //addItem agrega item al carrito
  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const updateQty = [...cart]; //crea una copia de carrito para hacer un mapeo y sumarle la cantidad al producto en caso de ya estar agregado

      updateQty.map((element) => {
        if (element.item.id === item.id) {
          element.quantity += quantity;
        }
      });
      setCart(updateQty); // actualiza el carrito con la cantidad
    } else {
      setCart([...cart, { item, quantity }]); // si el producto no esta en el carrito lo agrega
    }
  };

  //isInCart chequea si el producto esta o no en el carrito
  const isInCart = (id) => cart.find((element) => element.item.id === id);

  //clear elimina todos los productos del carrito
  const clear = () => {
    setCart([]);
  };

  //removeItem elimina el item seleccionado segun su id
  const removeItem = (id) => {
    const cartFilter = () => cart.filter((element) => element.item.id !== id);
    setCart(cartFilter);
  };


  //cartProducts suma la cantidad total de productos que hay en el carrito
  const cartProducts = cart.reduce((acc, product) => acc += product.quantity, 0)
  
  //totalPrice muestra el total de la compra
 const totalPrice = cart.reduce((acc, product) => acc += ((product.item.price)*(product.quantity)), 0)
  parseInt(totalPrice)
  
  
  console.log("Carrito", cart);

  return (
    <CartContext.Provider value={{ cart, addItem, clear, removeItem, cartProducts, totalPrice, isInCart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
