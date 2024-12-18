import Item from "./Item";

function Itemlist({ items }){
  
  return(
    <ul className='list-group'>
    {
      items.map((item) =>(
        <Item key={item} FoodItem={item}></Item>
      ))
    }
  </ul>
  )
}

export default Itemlist