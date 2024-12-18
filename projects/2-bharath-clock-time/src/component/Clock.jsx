function Clock(){
  let barathTime = new Date();
  return(
    <p>This is the current time : {barathTime.toLocaleDateString()} {barathTime.toLocaleTimeString()} </p>
  )
}
export default Clock