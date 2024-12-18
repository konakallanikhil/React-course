import styles from './Display.module.css'
const Display = ({onDisplayValue}) => {
  return(
    <input type="text" className={styles.display} value={onDisplayValue} readOnly/>
  )
}

export default Display;