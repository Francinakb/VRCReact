import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../Assets/logovrc.png";
import CartWidget from '../CartWidget/Cartwidget';
import "../NavBar2/NavBar2.css"

function ColorSchemesExample() {
    return (
    <>
        <Navbar data-bs-theme="light" className='navbar-style'>
        <Container className='d-flex justify-content-between align-items-center'>
                <div className='container-logo'>
                    <img href="#home" className='logo-vrc' src={logo} alt='logo-ecommerce' />
                </div>
            <Nav className="mx-auto">
            <Nav.Link className="navbar-color" href="#home">Inicio </Nav.Link>
            <Nav.Link className="navbar-color" href="#features">Productos</Nav.Link>
            <Nav.Link className="navbar-color" href="#pricing">Contacto</Nav.Link>
            </Nav>
            <CartWidget/>
        </Container>
        </Navbar>
    </>
    );
}

export default ColorSchemesExample;