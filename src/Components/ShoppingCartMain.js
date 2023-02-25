import React from 'react';
import Header from './Header';
import Nav from './Nav'
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ShopByCategory from './ShopByCategory';
import Cart from './Cart';
import ShoppingCart from './Shopping-cart';
export default function App() {
  return (
      <div className='main-section'>
        <Container>
          <Row>
            <Col md={3}>
              <ShopByCategory />
            </Col>
            <Col md={6}>
              <ShoppingCart />
            </Col>
            <Col md={3}>
              <Cart />
            </Col>
          </Row>
        </Container>
      </div>
  );
}
