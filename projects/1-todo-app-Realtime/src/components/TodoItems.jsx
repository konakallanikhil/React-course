import TodoItem from "./TodoItem"
function TodoItems({fooditem, onDeleteClick}){
  return(
    <div className='items-container'>
      {
        fooditem.map((item)=>(
          <TodoItem key={item} todoName={item.todoName} dueDate={item.dueDate} onDeleteClick={onDeleteClick}></TodoItem>
        ))
      }
    </div>
  )
}

export default TodoItems