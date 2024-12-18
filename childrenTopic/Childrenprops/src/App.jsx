import './App.css'
import FoodItems from './Component/FoodItems'
import Container from './Component/Container'
import Input from './Component/Input'
function App() {
  const vegetables = ['Sabzi', 'Green Vegetable', 'Roti', 'Salad', 'Milk', 'Ghee']
  return (
    <>
      <Container asdf="asdfasdf">
        <h1>Healthy Food</h1>
        <Input></Input>
        <FoodItems list={vegetables}></FoodItems>
      </Container>
    </>
  )
}

export default App
