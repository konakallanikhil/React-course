import styles from './Input.module.css'
const Input = ({onKeyDownEvent}) => {
  return(
    <input 
      className={styles.foodText} 
      type="text" 
      placeholder="Enter Text"
      onKeyDown={onKeyDownEvent}
    />
  )
}

export default Input