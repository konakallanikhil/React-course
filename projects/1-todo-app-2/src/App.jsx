import './App.css'
import Title from './components/Title'
import AddTodo from './components/AddTodo'
import TodoItem from './components/TodoItem'
import TodoItems from './components/TodoItems'
function App() {

  let todoList = [
    {
      todoName : 'Yoga',
      dueDate : '27-07-2001',
    },
    {
      todoName : 'Coding',
      dueDate : '26-07-2001',
    },
    {
      todoName : 'ScriptWriting',
      dueDate : '09-11-2000',
    }
  ]

  return (
    <center className='todo-container'>
      <Title></Title>
      <AddTodo></AddTodo>
      <TodoItems fooditem={todoList}></TodoItems>
    </center>
  )
}

export default App
