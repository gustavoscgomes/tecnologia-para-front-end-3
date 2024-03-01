import React from 'react'
import Exercicio1Adi from './components/Exercicio1Adi'
import Exercicio1Sub from './components/Exercicio1Sub'
import Exercicio1Mult from './components/Exercicio1Mult'
import Exercicio1Div from './components/Exercicio1Div'

const App = () => {
  return (
    <div>
      <Exercicio1Adi num1 = {1} num2 = {1}/>
      <Exercicio1Sub num1 = {2} num2 = {1}/>
      <Exercicio1Mult num1 = {2} num2 = {2}/>
      <Exercicio1Div num1 = {4} num2 = {2}/>
    </div>
  )
}

export default App