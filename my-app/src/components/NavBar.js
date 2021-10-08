
import{Navbar,Container,Nav} from 'react-bootstrap';
import logo from '../img/logo.svg'
import '../css/navBar.css'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom'

function NavBar() {

  return (
  
<Navbar expand="lg">
  <Container>
    <Navbar.Brand href="/"><img className="logo" src={logo} width="140" alt="logo"/> </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="text-center">
      <Nav className="ms-auto">
        <Link to="/" className="me-3 nav-link">Inicio </Link>
        <Link to="/category/panes" className="me-3 nav-link">Panes</Link>
        <Link to="/category/bolleria" className="me-3 nav-link">Bolleria</Link>
        <Nav.Link href="#link" className="active"> <CartWidget itemCount="3"/></Nav.Link>

       
      </Nav>
    </Navbar.Collapse>        

  </Container>
</Navbar>
   
  );
}

export default NavBar;
