function TodoItem2(){
  let todoName = `Interview Schedule`
  let tododate = `20-10-2024`
  return <div class="container">
  <div class="row">
    <div class="col-6">
      <p>{todoName}</p>
    </div>
    <div class="col-4">
      <p>{tododate}</p>
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-danger buttonchange">Delete</button>
    </div>
  </div>
</div>
}
export default TodoItem2