import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

export default function ShopByCategory() {
    const [name,setName]=useState('');
    const [userErr,setUserErr]=useState(false);

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
        setName(item)
      }
    return (
        <div className="App-category">
            <h3>Shop By category</h3>
            <Nav defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                    <Nav.Link href="/home">Laptops</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-1">Desktops</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-2">Cameras</Nav.Link>
                </Nav.Item>
            </Nav>
            {console.log("window.location.pathname",window.location.pathname)}
           {
            window.location.pathname !== "/cart" && 
            <Form className='userForm'>
            <Form.Group className="mb-3">
                <Form.Control type="url" placeholder="Image URL" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control type="text" onChange={productHandler} placeholder="Product Name" />{userErr?<span className='alert-msg'>Product not valid</span>:""}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control as="textarea" placeholder="Product Description" style={{ height: '60px' }}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control type="number" placeholder="Price" />
            </Form.Group>
            <Button className='btn-sm' variant="primary" type="submit">
                Submit
            </Button>
        </Form>
           }
        </div>
    );
}