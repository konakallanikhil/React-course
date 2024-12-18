import styles from './Input.module.css'
const Input = ({inputsend}) => {
  return(
    <input 
      className={styles.foodText} 
      type="text" 
      placeholder="Enter Text"
      onChange={inputsend}
    />
  )
}

export default Input