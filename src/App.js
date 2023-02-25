import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import './main.scss';
import ProductList from "./Components/ProductListMain"
import Header from './Components/Header';
import Nav from './Components/Nav'
import ShopingCart from "./Components/ShoppingCartMain"
export default function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <div className='main-section'>
      <Routes>
                <Route exact path='/' element={<ProductList />} />
                <Route exact path='/cart' element={<ShopingCart />} />
              </Routes>
      </div>
    </div>
  );
}
