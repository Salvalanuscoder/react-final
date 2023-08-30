import React, { createContext, useContext, useReducer } from 'react';

// Definir el contexto del carrito
const CartContext = createContext();

// Acciones disponibles para modificar el carrito
const actionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
};

// Reductor para gestionar el estado del carrito
function cartReducer(state, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      const { product } = action.payload;
      // Lógica para agregar un producto al carrito
      // ...
      return newState;
    }
    case actionTypes.REMOVE_FROM_CART: {
      const { productTitle } = action.payload;
      // Lógica para eliminar un producto del carrito
      // ...
      return newState;
    }
    case actionTypes.UPDATE_QUANTITY: {
      const { productTitle, newQuantity } = action.payload;
      // Lógica para actualizar la cantidad de un producto en el carrito
      // ...
      return newState;
    }
    case actionTypes.CLEAR_CART: {
      // Lógica para vaciar todo el carrito
      // ...
      return newState;
    }
    default:
      return state;
  }
}

// Componente proveedor del contexto del carrito
export function CartProvider({ children }) {
  const [cartState, dispatch] = useReducer(cartReducer, {}); // Estado inicial del carrito

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook personalizado para acceder al contexto del carrito
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser utilizado dentro de CartProvider');
  }
  return context;
}
