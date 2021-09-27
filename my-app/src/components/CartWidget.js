import {FaShoppingCart} from 'react-icons/fa';
import '../css/cartWidget.css';

const CartWidget = ({itemCount})=> {
   
  return (

            <div className="cartContainer"> 

              <FaShoppingCart className="cart me-1"/>
              {itemCount > 0 ? (<span className="badge bg-secondary">{itemCount}</span>) : ""}
     
            </div>
          );
}

export default CartWidget;
