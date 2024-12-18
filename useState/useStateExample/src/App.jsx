import './App.css'
import FoodItems from './Component/FoodItems'
import Container from './Component/Container'
import Input from './Component/Input'
import { useState } from 'react'
function App() {
  
  const vegetables = ['Sabzi', 'Green Vegetable', 'Roti', 'Salad', 'Milk', 'Ghee']

  let[text, setText] = useState("");

  const onChangeEvent = (event) =>{
    setText(event.target.value);
  }

  return (
    <>
      <Container asdf="asdfasdf">
        <h1>Healthy Food</h1>
        <Input inputsend={onChangeEvent}></Input>
        <p>{text}</p>
        <FoodItems list={vegetables}></FoodItems>
      </Container>
    </>
  )
}

export default App
