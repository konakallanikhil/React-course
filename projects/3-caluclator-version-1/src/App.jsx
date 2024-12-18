import styles from './App.module.css'
import Display from './Componets/Display'
import ButtonContainer from './Componets/Button'

function App() {
  const buttonNames = ['C','1','2','3','4','5','6','7','8','9','0','+','-','*','/','.']
  return (
    <>
    <div className={styles.calculator}>
      <Display></Display>
      <ButtonContainer buttonSend={buttonNames}></ButtonContainer>
    </div>
    </>
  )
}

export default App
