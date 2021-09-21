


const ItemListContainer = (props) => {
  const {greeting} = props;
  const greetingUi = <div className="text-white text-center mt-5"> <h1>{greeting}</h1></div>;

  return (
          greetingUi
          )
}

export default ItemListContainer
