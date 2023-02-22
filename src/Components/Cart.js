import { Col, Row } from 'react-bootstrap';

export default function Cart() {
    return (
        <div className="App-cart">
            <h3>Your Cart</h3>
            <Row>
                <Col><div className="cart-item">
                    <span>1</span>Item - $<span>999.00</span></div></Col>
            </Row>
            <Row>
                <Col><div className="cart-link">
                <a href="/cart">View Cart</a><a href="">Checkout</a></div></Col>
            </Row>
        </div>
    );
}