import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

export default function navApp() {
    return (
        <div className="App-nav">
            <Container>
                <Row>
                    <Col>
                        <Navbar>
                            <Nav.Link href="#home">About Us</Nav.Link>
                            <Nav.Link href="#home">Contact Us</Nav.Link>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
            {/* <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav> */}
        </div>
    );
}