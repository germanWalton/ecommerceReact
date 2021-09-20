import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <header>
      <NavBar/>
      <ItemListContainer greeting="Venta de panes"/>

    </header>
  );
}

export default App;
