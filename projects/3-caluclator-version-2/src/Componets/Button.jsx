import styles from './Button.module.css'
const ButtonContainer = ({buttonSend,onClickButton}) =>{
  return(
    <div className={styles.buttonContainer}>
    {
      buttonSend.map(buttonName =><button key={buttonName} className={styles.button} onClick={()=> onClickButton(buttonName)}>{buttonName}</button>)
    }
  </div>
  )
}
export default ButtonContainer