function TodoItem1(){

  let todoName = `Report Submission`
  let todoDate = `10-09-2024`
  return <div class="container">
  <div class="row">
    <div class="col-6">
      <p>{todoName}</p>
    </div>
    <div class="col-4">
      <p>{todoDate}</p>
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-danger buttonchange">Delete</button>
    </div>
  </div>
</div>
}
export default TodoItem1