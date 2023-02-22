import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export default function DetailsModalPopup(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Product Name
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='details-wrapper'>
                    <Row>
                        <Col md={5}>
                            <div className='image-wrapper'>
                                <img src='"https://media.geeksforgeeks.org/wp-content/uploads/geeksforgeeks-13.png"' alt="" />
                            </div>
                        </Col>
                        <Col md={7}>
                            <div className='details-description'>
                            <Form.Group className="mb-2">
                                <Form.Label>Color</Form.Label>
                                    <Form.Select>
                                        <option>Red</option>
                                        <option>Green</option>
                                        <option>White</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-2">
                                    <Form.Label>Qty</Form.Label>
                                    <Form.Control className='qtyInput' placeholder="input" />
                                </Form.Group>
                                <Form.Group className="mb-2 price-text">
                                    <Form.Label>Price</Form.Label>
                                    <span>$99.00</span>
                                </Form.Group>
                            </div>
                        </Col>
                    </Row>


                    <Row>
                        <Col>
                            <div className='product-description mt-3'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div></Col>
                    </Row>

                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
                <Button variant="primary" onClick={props.onHide}>Add to Cart</Button>
            </Modal.Footer>
        </Modal>
    );
}