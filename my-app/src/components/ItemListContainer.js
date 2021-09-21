


const ItemListContainer = (props) => {
  const {itemCount} = props;
  const itemCountTag = itemCount>0?<span className="badge bg-secondary">{itemCount}</span>:"";
  
  return (
          itemCountTag 
          )
}

export default ItemListContainer
