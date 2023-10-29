// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Cart.css'
import { faArrowLeft, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const { cart } = props;

    const totalPrice = cart.reduce((previous, current) => previous + current?.price, 0)
    const totalShipping = cart.reduce((previous, current) => previous + current?.shipping, 0)

    // 10% tax applicable
    const tax = totalPrice * 10 / 100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart_container'>
            <h3>Order summary</h3>
            <div className="cart_summary">
                <p>Selected item: {cart.length}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Shipping Cost: ${totalShipping}</p>
                <p>Tax: ${tax}</p>
                <h3>Grand Total: ${grandTotal}</h3>
            </div>
            <div className="cart_button">
                <button className='clear_cart_btn'>
                    Clear Cart
                    <FontAwesomeIcon className='cart_button_style' icon={faTrashAlt} />
                </button>
                <button className='review_cart_btn'>
                    Review Order
                    <FontAwesomeIcon className='cart_button_style' icon={faArrowLeft} rotation={180} />
                </button>
            </div>
        </div>
    );
};

export default Cart;