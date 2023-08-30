import React from 'react';
import { useCart } from './CartContext';

function CartWidget() {
  const { cartState } = useCart();

  // Calcular la cantidad total de productos en el carrito
  const totalItems = Object.values(cartState).reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <div className="cart-widget">
      <span className="cart-icon">🛒</span>
      <span className="cart-count">{totalItems}</span>
    </div>
  );
}

export default CartWidget;
