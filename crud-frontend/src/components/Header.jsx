import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./css/header.css"

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark" className='navStyle'>
                <Container className='container'>
                    <Navbar.Brand to="/">Navbar</Navbar.Brand>
                    <Nav className="navLink">
                        <Nav.Link as={Link} to="/deshboar">Deshboard</Nav.Link>
                        <Nav.Link as={Link} to="/postuser">PostUser</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;