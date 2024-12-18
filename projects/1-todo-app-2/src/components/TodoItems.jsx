import TodoItem from "./TodoItem"
function TodoItems({fooditem}){
  return(
    <div className='items-container'>
      {
        fooditem.map((item)=>(
          <TodoItem todoName={item.todoName} dueDate={item.dueDate}></TodoItem>
        ))
      }
    </div>
  )
}

export default TodoItems