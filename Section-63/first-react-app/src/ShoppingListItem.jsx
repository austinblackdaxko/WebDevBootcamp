function ShoppingListItem({item, quantity, completed}) {
  const style = {
    color: completed ? "grey" : "red", 
    textDecoration: completed ? "line-through" : "none"
  };
  return (
    <li style={style}>
      {item} - {quantity}
    </li>
  );
}

export default ShoppingListItem;





{/* <li key={item.id}
        style={{
          color: item.purchased ? "grey" : "red", 
          textDecoration: item.purchased ? "line-through" : "none"
        }}>
          {item.item} - {item.quantity}
        </li> */}