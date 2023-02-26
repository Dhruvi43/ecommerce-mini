import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from '../Assets/logo.png'
import { useState } from 'react';

export default function Header() {
    const urlParams = new URLSearchParams(window.location.search);
    const [search,setSearch]=useState(urlParams.get('search'))
    const handleSearch = () =>{
        urlParams.set('search', search); 
        window.location.search = urlParams;
    }
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
                                <Form.Control type="search" value={search} placeholder="Search" onChange={(e) => setSearch(e.target.value)}/>
                                <Button className='btn btn-lg' variant="primary" onClick={handleSearch}>
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