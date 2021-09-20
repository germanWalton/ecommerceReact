import {FaShoppingCart} from 'react-icons/fa';
import Badge from 'react-bootstrap/Badge'

const CartWidget = (props) => {
const {numero} = props;
  return (
  <div className="bg-primary"> 
    <Badge bg="warning" text="dark">{numero}</Badge>
     <FaShoppingCart/>
   </div>
  );
}

export default CartWidget;
