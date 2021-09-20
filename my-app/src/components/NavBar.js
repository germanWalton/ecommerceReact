
import{Navbar,Container,Nav} from 'react-bootstrap';
import logo from '../img/logo.svg'
import './navBar.css'
import CartWidget from './CartWidget';

function NavBar() {

  return (
  
<Navbar expand="lg">
  <Container>
    <Navbar.Brand href="#home"><img className="logo" src={logo} width="140"/> </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="text-center">
      <Nav className="ms-auto">
        <Nav.Link href="#home">Inicio</Nav.Link>
        <Nav.Link href="#link">Productos</Nav.Link>
        <Nav.Link href="#link">Comprar</Nav.Link>
        <Nav.Link href="#link" className="active"> <CartWidget numero="2"/></Nav.Link>

       
      </Nav>
    </Navbar.Collapse>        

  </Container>
</Navbar>
   
  );
}

export default NavBar;
