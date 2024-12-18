import { useState } from "react"
import { IoAddCircleSharp } from "react-icons/io5";

function AddTodo({AddTodoButton}){  

  const [todoName,setTodoName] = useState("");
  const [dueDate,setDueDate] = useState("");

  const handleNameChange = (event)=>{
    setTodoName(event.target.value);
  }
  const handleDateChange = (event)=>{
    setDueDate(event.target.value);
  }
  const handleAddButtonClicked=()=>{
    AddTodoButton(todoName,dueDate);
    setDueDate("");
    setTodoName("");
  }
  return(
<div className="container text-center">
  <div className="row">
    <div className="col-6">
      <input type="text" placeholder="Enter Todo Here" value={todoName} onChange={handleNameChange}/>
    </div>
    <div className="col-4">
      <input type="date" name="date" id="date" value={dueDate} onChange={handleDateChange}/>
    </div>
    <div className="col-2">
    <button type="button" className="btn btn-success buttonchange" onClick={handleAddButtonClicked}><IoAddCircleSharp size={20}/></button>
    </div>
  </div>
</div>
  )
}
export default AddTodo