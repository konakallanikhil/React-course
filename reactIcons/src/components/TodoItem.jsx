import { MdDelete } from "react-icons/md";
function TodoItem({todoName,dueDate,onDeleteClick}){
  return(
<div className="container">
  <div className="row">
    <div className="col-6">
      <p>{todoName}</p>
    </div>
    <div className="col-4">
      <p>{dueDate}</p>
    </div>
    <div className="col-2">
    <button type="button" className="btn btn-danger buttonchange" onClick={() => onDeleteClick(todoName)}><MdDelete /></button>
    </div>
  </div>
</div>
  )
}


export default TodoItem;