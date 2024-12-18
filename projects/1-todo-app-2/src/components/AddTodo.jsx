function AddTodo(){
  return <div class="container text-center">
  <div className="row">
    <div className="col-6">
      <input type="text" placeholder="Enter Todo Here"/>
    </div>
    <div className="col-4">
      <input type="date" name="date" id="date" />
    </div>
    <div className="col-2">
    <button type="button" className="btn btn-success buttonchange">Add</button>
    </div>
  </div>
</div>
}
export default AddTodo