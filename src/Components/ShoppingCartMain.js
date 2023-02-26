import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ShopByCategory from './ShopByCategory';
import Cart from './Cart';
import ShoppingCart from './Shopping-cart';
export default function App() {
  const [cartData,setCartData] = useState()
  const [filterProduct,setFilterProduct] = useState([])
  const [count,setCount] = useState(1)
  useEffect(()=>{
   if(count === 1){
    setCartData(JSON.parse(localStorage.getItem('cart')))
   }
    setCount(0)
  },[count])
  const getShoByCategory = val =>{
    if(val !== "clear"){
      let prod = cartData;
    let arr = prod.filter(e => e.title.toLowerCase().search(val.toLowerCase()) > -1)
    setFilterProduct(arr);
    } else{
      setFilterProduct([])
    } 
  }
  const changeQuantity = (e,qty) =>{
    let index = cartData.findIndex(c => c.id === e.id)
    cartData[index].quantity = qty;
    setCartData(cartData);
    localStorage.setItem('cart',JSON.stringify(cartData))
    setCount(1)
  }
  const removeItem = e =>{
    let index = cartData.findIndex(c => c.id === e.id)
    cartData.splice(index,1)
    setCartData(cartData)
    localStorage.setItem('cart',JSON.stringify(cartData))
    setCount(1)
  }
  useEffect(()=>{
    const urlParams = new URLSearchParams(window.location.search);
     let params = urlParams.get('search');
     if(!params){
      window.history.pushState({}, document.title, window.location.pathname);
     }
    getSearchProduct(params)
  },[window.location.search])
  const getSearchProduct =(val) =>{
   if(val === "" || !val ){
    setFilterProduct([])
   } else{
    let prod = JSON.parse(localStorage.getItem('cart'));
    let arr = prod?.filter(e => e.title.toLowerCase().search(val.toLowerCase()) > -1 || e.description.toLowerCase().search(val.toLowerCase()) > -1)
    setFilterProduct(arr);
   } 
  } 
  return (
      <div className='main-section'>
        <Container>
          <Row>
            <Col md={3}>
              <ShopByCategory getShoByCategory = {getShoByCategory}/>
            </Col>
            <Col md={6}>
              <ShoppingCart product = {filterProduct?.length === 0 && window.location.search ? [] : filterProduct?.length > 0 ? filterProduct : cartData} changeQuantity ={changeQuantity} removeItem ={removeItem}/>
            </Col>
            <Col md={3}>
              <Cart addToCart={cartData} />
            </Col>
            
          </Row>
        </Container>
      </div>
  );
}
