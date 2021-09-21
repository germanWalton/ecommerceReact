import './App.css';
import NavBar from './components/NavBar';
import {Container} from 'react-bootstrap';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
    <Container>
      <header>
        <NavBar/>
      </header>
    </Container>
     
    <Container className="bg-secondary">
      <ItemListContainer greeting="Panes y Bollería"/>
    </Container>

</>

  );
}

export default App;
