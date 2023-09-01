import React from 'react';
import { useCart } from '../CartContext/CartContext';
// import { cartIcon } from '../../../public/cartIcon.png';
// import '../../scss/components/cartWidget.scss';
const cartIcon = '/cartIcon.png';
const CartWidget = () => {
    const { cartItems, cartTotal } = useCart();

    return (
        <div className="cart-widget">
            <div className='cart-container'>
                <img className='cartIcon' src={cartIcon} alt="carrito de compras" />
                <div className="item-count">{cartItems.length}</div>
            </div>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                        <button onClick={() => removeFromCart(item)}>Eliminar</button>
                    </li>
                ))}
            </ul>
            <p>Total: ${cartTotal}</p>
        </div>
    );
};

export default CartWidget;
