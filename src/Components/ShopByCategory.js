import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import {product} from "../constants"
export default function ShopByCategory(props) {
    const [title,setTitle]=useState('');
    const [img,setImg]=useState('');
    const [description,setDescription]=useState('');
    const [price,setPrice]=useState(0);
    const [userErr,setUserErr]=useState(false);
    const handleSubmitCat = async e =>{
        e.preventDefault();
        await props.handleSubmit(title,img,description,price)
        await setTitle("")
        await setDescription("")
        await setImg("")
        await setPrice(0)
    }
    function productHandler(e) {
        let item=e.target.value;
        if(item.length<3)
        {
          setUserErr(true)
        }
        else 
        {
          setUserErr(false)
        }
        console.warn(e.target.value)
        setTitle(item)
      }
    return (
        <div className="App-category">
            <h3>Shop By category</h3>
            <Nav as="ul" onSelect={(selectedKey) => props.getShoByCategory(selectedKey)}>
                <Nav.Item as="li" >
                    <Nav.Link eventKey="laptop">Laptops</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="desktop">Desktops</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="camera">Cameras</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="clear">Clear ALL</Nav.Link>
                </Nav.Item>
            </Nav>
           {
            window.location.pathname !== "/cart" && 
            <Form className='userForm'>
            <Form.Group className="mb-3">
                <Form.Control type="url" value={img} onChange={(e) => setImg(e.target.value)} placeholder="Image URL" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control type="text" value={title} onChange={productHandler} placeholder="Product Name" />{userErr?<span className='alert-msg'>Product not valid</span>:""}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control as="textarea" value={description} placeholder="Product Description" onChange={(e) => setDescription(e.target.value)} style={{ height: '60px' }}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)}/>
            </Form.Group>
            <Button className='btn-sm' variant="primary" type="submit" onClick = {handleSubmitCat}>
                Submit
            </Button>
        </Form>
           }
        </div>
    );
}