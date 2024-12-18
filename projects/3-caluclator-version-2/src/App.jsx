import styles from './App.module.css'
import Display from './Componets/Display'
import ButtonContainer from './Componets/Button'
import { useState } from 'react'

function App() {

  const buttonNames = ['C','1','2','3','4','5','6','7','8','9','0','+','-','*','/','.','=']

  let [displayVal, setDisplayValue] = useState("");

  const buttonFunction = (buttonText)=>{
    if(buttonText === 'C'){
      setDisplayValue("");
    } 
    else if (buttonText === '='){
      const result = eval(displayVal);
      setDisplayValue(result);
    }
    else{
      const newDisplayValue = displayVal + buttonText;
      setDisplayValue(newDisplayValue)
    }
  }

  return (
    <>
    <div className={styles.calculator}>
      <Display onDisplayValue={displayVal}></Display>
      <ButtonContainer buttonSend={buttonNames} onClickButton={buttonFunction}></ButtonContainer>
    </div>
    </>
  )
}

export default App
