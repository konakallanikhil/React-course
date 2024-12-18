import './App.css'
import FoodItems from './Component/FoodItems'
import Container from './Component/Container'
import Input from './Component/Input'
import { useState } from 'react'

function App() {

  let[vegetables, setVegetables] = useState([
    'Sabzi', 
    'Green Vegetable', 
    'Roti'
  ]);

  const onKeyDownFunc = (event) =>{
    if(event.key === 'Enter'){
      let newItem = event.target.value;
      let newItemAddedToOldList = [...vegetables,newItem];
      setVegetables(newItemAddedToOldList);
    }
  }

  return (
    <>
      <Container asdf="asdfasdf">
        <h1>Healthy Food</h1>
        <Input onKeyDownEvent={onKeyDownFunc}></Input>
        <FoodItems list={vegetables}></FoodItems>
      </Container>
    </>
  )
}

export default App
