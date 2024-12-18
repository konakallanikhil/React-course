import styles from './Button.module.css'
const ButtonContainer = ({buttonSend}) =>{
  // const buttonNames = ['C','1','2','3','4','5','6','7','8','9','0','+','-','*','/','.']
  return(
    <div className={styles.buttonContainer}>
    {
      buttonSend.map(buttonName =><button key={buttonName} className={styles.button}>{buttonName}</button>)
    }
  </div>
  )
}
export default ButtonContainer