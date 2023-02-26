import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';

const Cart =({addToCart})=> {
    let total = addToCart?.reduce((sum, currentItem) => { 
        return sum + (parseFloat(currentItem.quantity) * parseFloat(currentItem.price)); 
    }, 0);
    return (
        <div className="App-cart">
            <h3>Your Cart</h3>
            <Row>
                <Col><div className="cart-item">
                    <span>{addToCart?.length}</span> Item - $<span>{parseFloat(total).toFixed(2)}</span></div></Col>
            </Row>
            <Row>
                <Col><div className="cart-link">
                <a href="/cart">View Cart</a><a href="">Checkout</a></div></Col>
            </Row>
        </div>
    );
}


export default Cart;