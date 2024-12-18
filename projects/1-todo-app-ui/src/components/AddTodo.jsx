function AddTodo(){
  return <div class="container text-center">
  <div class="row">
    <div class="col-6">
      <input type="text" placeholder="Enter Todo Here"/>
    </div>
    <div class="col-4">
      <input type="date" name="date" id="date" />
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-success buttonchange">Add</button>
    </div>
  </div>
</div>
}
export default AddTodo