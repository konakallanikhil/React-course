function Random(){

  let random = Math.floor(Math.random() * 100)

  return <h3 style={{'backgroundColor' : "yellow"}}>
    Random Number : {random}
  </h3>
}

export default Random