import './App.css';
import NavBar from './components/NavBar';
import {Container} from 'react-bootstrap';

function App() {
  return (
    <>
    <Container>
      <header>
        <NavBar/>
      </header>
    
     </Container>
     
    <Container className="bg-secondary">
      <div className="text-white text-center mt-5"> <h1>Pan y Bollería</h1></div>
     </Container>

</>

  );
}

export default App;
