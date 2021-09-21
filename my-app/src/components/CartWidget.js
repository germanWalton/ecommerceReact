import {FaShoppingCart} from 'react-icons/fa';
import '../css/cartWidget.css';

const CartWidget = (props)=> {
  const {itemCount} = props;
  const itemCountTag = itemCount>0?<span className="badge bg-secondary">{itemCount}</span>:"";
  return (

  <div className="cartContainer"> 
     <FaShoppingCart className="cart me-1"/>{itemCountTag}
   </div>
  );
}

export default CartWidget;
