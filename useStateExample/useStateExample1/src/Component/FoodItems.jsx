import Items from "./Items"
import { useState } from "react"
const FoodItems = ({list}) => {

  let [activeItems, setActiveItems] = useState([])

  let onBuyButton = (diffVeg,event) => {
    let newItems = [...activeItems, diffVeg];
    setActiveItems(newItems);
  }

  return(
    <ul className='list-group'>
        {
          list.map((diffVeg)=>(
          <Items key={diffVeg} listItem={diffVeg} bought={activeItems.includes(diffVeg)} handleByButton={(event) => {onBuyButton(diffVeg,event)}}></Items>
        ))
        }
    </ul>
  )
}

export default FoodItems