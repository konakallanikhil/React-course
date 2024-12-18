function App(){

  let username = 'Konakalla Naga Venkata Nikhil'
  let location = () => {
    return 'Kondapalli'
  }
  return <div>
  <h4>
    Now we are going to understand the Dynamic Component
  </h4>
  <h4>
    My name is : {username}<br></br>
    My location is : {(location())}
  </h4>
  </div>
}

export default App