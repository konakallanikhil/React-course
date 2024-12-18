import './App.css'

function App() {

  let foodItems = ['Dal','Podina','Salt','Pepper','Tomoto','Mirchi','Carraot']

  return (
    <>
      <p>Basicllay if we need list of item we use ui and li to represent the following but it take more item as DOM elements are more becouse if the list small it is suffient but if there are 100's values then it is not possible to write 100 li tags so in this case we can <b>MAP FUNCTION</b> here we use only one ul and one li tag</p>

      <ul className='list-group'>
        {
          foodItems.map((item) => (
            <li key={item} className='list-group-item'>{item}</li>
          ))
        }
      </ul>
    </>
  )
}

export default App
