import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import './main.scss';
import ProductList from "./Components/ProductList"
import Header from './Components/Header';
import Nav from './Components/Nav'
import ShopingCart from "./Components/Shopping-cart"
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ShopByCategory from './Components/ShopByCategory';
import Cart from './Components/Cart';
export default function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <div className='main-section'>
        <Container>
          <Row>
            <Col md={3}>
              <ShopByCategory />
            </Col>
            <Col md={6}>
              <Routes>
                <Route exact path='/' element={<ProductList />} />
                <Route exact path='/cart' element={<ShopingCart />} />
              </Routes>
            </Col>
            <Col md={3}>
              <Cart />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
