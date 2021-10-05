import React from "react";
import Item from "./Item";
import { Spinner } from "react-bootstrap";

function ItemList({ items }) {
  return (
    <>
      {items ? (
        items.map((product, id) => <Item key={id} item={product} />)
      ) : (
        <Spinner animation="border" variant="primary" />
      )}
    </>
  );
}
export default ItemList;
