import {FaShoppingCart} from 'react-icons/fa';
import ItemListContainer from './ItemListContainer';
import '../css/cartWidget.css';

function CartWidget () {
  return (
  <div className="cartContainer"> 
     <FaShoppingCart className="cart"/> <ItemListContainer itemCount="7"/>
   </div>
  );
}

export default CartWidget;
