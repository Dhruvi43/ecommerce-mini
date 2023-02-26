import ListGroup from 'react-bootstrap/ListGroup';
import IncreDecre from "./IncreDecre";
import { FaTimes } from "react-icons/fa";

export default function ShoppingCart({product,changeQuantity,removeItem}) {
    return (
        <div className="App-shopping-cart">
            <h3>Shopping Cart - {product?.length} items</h3>
            <ListGroup as="ul">
                {
                    product?.length > 0 ? 
                        product.map(e =>(
                            <ListGroup.Item as="li">
                            <div className='image-wrapper'>
                                <img src={e.img} alt="Product Image" />
                            </div>
                            <h5>{e.title}</h5>
                            <div><IncreDecre changeQuantity ={changeQuantity} editData={e}/></div>
                            <p>${e.price}</p>
                            <button onClick={() =>removeItem(e)}><FaTimes /></button>
                        </ListGroup.Item>
                        ))
                    :
                    <ListGroup.Item as="li">
                        <h5>No Items Found</h5>
                </ListGroup.Item>
                }
            </ListGroup>
        </div>
    );
} 
