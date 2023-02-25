import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export default function DetailsModalPopup(props) {
    const {data} = props
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
                                    <Form.Select>
                                        <option>Red</option>
                                        <option>Green</option>
                                        <option>White</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-2">
                                    <Form.Label>Qty</Form.Label>
                                    <Form.Control className='qtyInput' value={1} placeholder="input" />
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
                <Button variant="primary" onClick={props.onHide}>Add to Cart</Button>
            </Modal.Footer>
        </Modal>
    );
}