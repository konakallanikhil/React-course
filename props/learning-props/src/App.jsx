import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ErrorMessage from './ErrorMessage'
import Itemlist from './ItemList'

function App() {

  const foodItems = ["Pizza", "Burger", "Sushi", "Pasta", "Tacos", "Salad", "Steak", "Ice Cream", "Dumplings", "Falafel"];

  return (
    <>
    <p><b>Here we are printing the data of array items using map and here in app we have array of items , ul and li and map in the same app.jsx but it is not a good practise so we need to create different component for ul and different compone nt for li and we need to get the data from app.jsx i.e. parent component and it should be used by child components.</b></p>
    <ErrorMessage items={foodItems}></ErrorMessage>
    <Itemlist items={foodItems}></Itemlist>
    </>
  )
}

export default App
