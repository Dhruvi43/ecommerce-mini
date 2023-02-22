import Cart from "./Cart";
import ListGroup from 'react-bootstrap/ListGroup';
import IncreDecre from "./IncreDecre";
import { FaTimes } from "react-icons/fa";

export default function ShoppingCart() {
    return (
        <div className="App-shopping-cart">
            <h3>Shopping Cart - 3 items</h3>
            <ListGroup as="ul">
                <ListGroup.Item as="li">
                    <div className='image-wrapper'>
                        <img src='./assets/logo.png' alt="Product Image" />
                    </div>
                    <h5>Product Name 1</h5>
                    <div><IncreDecre /></div>
                    <p>$99:00</p>
                    <button><FaTimes /></button>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    <div className='image-wrapper'>
                        <img src='./assets/logo.png' alt="Product Image" />
                    </div>
                    <h5>Product Name 1</h5>
                    <div><IncreDecre /></div>
                    <p>$99:00</p>
                    <button><FaTimes /></button>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    <div className='image-wrapper'>
                        <img src='./assets/logo.png' alt="Product Image" />
                    </div>
                    <h5>Product Name 1</h5>
                    <div><IncreDecre /></div>
                    <p>$99:00</p>
                    <button><FaTimes /></button>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
} 
