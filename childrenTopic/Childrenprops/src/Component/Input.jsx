import styles from './Input.module.css'
const Input = () => {
  const onChangeEvent = (event) =>{
    console.log(event.target.value)
  }
  return(
    <input 
      className={styles.foodText} 
      type="text" 
      placeholder="Enter Text"
      onChange={onChangeEvent}
    />
  )
}

export default Input