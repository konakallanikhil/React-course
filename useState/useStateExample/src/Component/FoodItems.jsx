import Items from "./Items"
const FoodItems = ({list}) => {
  return(
    <ul className='list-group'>
        {
          list.map((diffVeg)=>(
          <Items key={diffVeg} listItem={diffVeg}></Items>
        ))
        }
    </ul>
  )
}

export default FoodItems