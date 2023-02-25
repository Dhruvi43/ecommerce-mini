import React, { useEffect, useState } from 'react';
import ProductList from "./ProductList"
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ShopByCategory from './ShopByCategory';
import Cart from './Cart';

const App = () => {
  const [singleProduct,setSingleProduct] = useState(null)
    const [product,setProduct] = useState([
        {
            id : 1,
            title : "Mac Laptop 1",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula libero vitae faucibus feugiat. Aenean abcdf suspendisse vehicula libero vitae faucibus feugiat. ",
            price : 99.00,
            img : "https://www.gstatic.com/webp/gallery/1.jpg",
        },
        {
            id : 2,
            title : "Laptop 2",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula libero vitae faucibus feugiat. Aenean abcdf suspendisse vehicula libero vitae faucibus feugiat. ",
            price : 80.00,
            img : "https://www.gstatic.com/webp/gallery/1.jpg",
        },
        {
            id : 3,
            title : "Camera 1",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula libero vitae faucibus feugiat. Aenean abcdf suspendisse vehicula libero vitae faucibus feugiat. ",
            price : 50.00,
            img : "https://www.gstatic.com/webp/gallery/1.jpg",
        },
        {
            id : 4,
            title : "Desktop 1",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula libero vitae faucibus feugiat. Aenean abcdf suspendisse vehicula libero vitae faucibus feugiat. ",
            price : 200.00,
            img : "https://www.gstatic.com/webp/gallery/1.jpg",
        }
    ])
    const [filterProduct,setFilterProduct] = useState([])
    const handleSubmit = (title,img,description,price) =>{
      if(title && img && description && price){
        setSingleProduct({title,img,description,price})
      } 
    }
    useEffect(()=>{
      if(singleProduct){
        singleProduct.id = product.length +1
        setProduct(prevProduct => ([...prevProduct, singleProduct]));
      }
    },[singleProduct])
    const getShoByCategory = val =>{
      if(val !== "clear"){
        let prod = product;
      let arr = prod.filter(e => e.title.toLowerCase().search(val.toLowerCase()) > -1)
      setFilterProduct(arr);
      } else{
        setFilterProduct([])
      }
      
    }
  return (
      <div className='main-section'>
        <Container>
          <Row>
            <Col md={3}>
              <ShopByCategory handleSubmit = {handleSubmit} getShoByCategory = {getShoByCategory}/>
            </Col>
            <Col md={6}>{console.log("product",product)}
              <ProductList product = {filterProduct.length > 0 ? filterProduct.sort((a,b)=>b.id-a.id) :product.sort((a,b)=>b.id-a.id)}/>
            </Col>
            <Col md={3}>
              <Cart />
            </Col>
          </Row>
        </Container>
      </div>
  );
}
export default App;