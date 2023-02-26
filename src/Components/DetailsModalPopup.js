import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export default function DetailsModalPopup(props) {
    const {data} = props
    const [color,setColor] = useState('red')
    const [quantity,setQuantity] = useState(1)
    const addToCart = async () =>{
       await props.addToCartFunc({
            ...data,
            color,
            quantity
        })
        await setQuantity(1);
        await setColor('red')
        await props.onHide()
    }
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {data?.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='details-wrapper'>
                    <Row>
                        <Col md={5}>
                            <div className='image-wrapper'>
                                <img src={data?.img} alt="" />
                            </div>
                        </Col>
                        <Col md={7}>
                            <div className='details-description'>
                            <Form.Group className="mb-2">
                                <Form.Label>Color</Form.Label>
                                    <Form.Select defaultValue={color} onChange={e => setColor(e.target.value)}>
                                        <option value="red">Red</option>
                                        <option value="green">Green</option>
                                        <option value="white">White</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-2">
                                    <Form.Label>Qty</Form.Label>
                                    <Form.Control className='qtyInput' value={quantity} onChange={e=> setQuantity(e.target.value)} placeholder="input" />
                                </Form.Group>
                                <Form.Group className="mb-2 price-text">
                                    <Form.Label>Price</Form.Label>
                                    <span>${data?.price}</span>
                                </Form.Group>
                            </div>
                        </Col>
                    </Row>


                    <Row>
                        <Col>
                            <div className='product-description mt-3'>
                                <p>{data?.description}</p>
                            </div></Col>
                    </Row>

                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
                <Button variant="primary" onClick={addToCart} disabled={quantity === "0"}>Add to Cart</Button>
            </Modal.Footer>
        </Modal>
    );
}