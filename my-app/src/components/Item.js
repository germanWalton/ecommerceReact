import React from 'react'
import {Card,Button,Badge} from 'react-bootstrap'
import ItemCount from './ItemCount';


function Item(item){

const{id,title,price,description,stock,imageUrl}=item.item;

  return(
  <Card style={{ width:'18rem' }} className="text-center me-4 mt-3">
  <Card.Img variant="top" className="mt-3" src={imageUrl} />
  <Card.Body className="text-dark">
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      {description}
    </Card.Text>
    <h3>${price}</h3>
    <Button variant="secondary">Ver detalle</Button>
    <ItemCount initial={0} stock={stock}/>
  </Card.Body>
</Card>
  )
}



export default Item