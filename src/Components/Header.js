import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from '../Assets/logo.png'

export default function Header() {
    return (
        <div className="App-header">
            <Container>
                <Row className='flex-box'>
                    <Col md={6}>
                        <div className='header-logo'>
                            <a href="/"><img src={logo} alt="Logo" /></a>
                        </div>
                    </Col>
                    <Col md={6}>
                        <Form>
                            <Form.Group className='serach-box'>
                                <Form.Control type="search" placeholder="Search" />
                                <Button className='btn btn-lg' variant="primary" type="submit">
                                    Search
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}