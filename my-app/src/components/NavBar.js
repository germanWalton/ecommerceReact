
import{Navbar,Container,Nav} from 'react-bootstrap';
import logo from '../img/logo.svg'
import '../css/navBar.css'
import CartWidget from './CartWidget';

function NavBar() {

  return (
  
<Navbar expand="lg">
  <Container>
    <Navbar.Brand href="#home"><img className="logo" src={logo} width="140" alt="logo"/> </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="text-center">
      <Nav className="ms-auto">
        <Nav.Link href="#home" className="me-3">Inicio </Nav.Link>
        <Nav.Link href="#link" className="me-3">Productos</Nav.Link>
        <Nav.Link href="#link" className="me-3">Comprar</Nav.Link>
        <Nav.Link href="#link" className="active"> <CartWidget itemCount="3"/></Nav.Link>

       
      </Nav>
    </Navbar.Collapse>        

  </Container>
</Navbar>
   
  );
}

export default NavBar;
