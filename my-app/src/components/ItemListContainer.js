import ItemCount from "./ItemCount"


const ItemListContainer = ({greeting}) => {

  return (
            <>
            {<div className="text-white text-center mt-5"> <h1>{greeting}</h1></div>}
            <ItemCount stock={20} initial={0}/>
            </>
          )
}

export default ItemListContainer
