import './App.css'
import Title from './components/Title'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'
import WelcomeMessage from './components/WelcomeMessage'
import { useState } from 'react'
function App() {

  let [todoItems,setTodoItems] = useState([]);

  const onNewItem = (itemName, itemDueDate) =>{
    const newTodoItems = [...todoItems,{todoName: itemName, dueDate: itemDueDate}];
    setTodoItems(newTodoItems);
  }

  const handleDeleteItem = (todoItemName)=>{
    const deletedItem = todoItems.filter(item => item.todoName !== todoItemName);
    setTodoItems(deletedItem);
  }
  return (
    <center className='todo-container'>
      <Title></Title>
      <AddTodo AddTodoButton={onNewItem}></AddTodo>
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems fooditem={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
    </center>
  )
}

export default App
