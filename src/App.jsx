import { useState } from 'react'
import './App.css'
import { Card } from './Card'
import { NavBar } from './NavBar'

function App() {
  
  const questions = [
    {text: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript"},
    {text: "O que é React?", answer: "Uma biblioteca JavaScript para construção de interfaces"},
    {text: "O que é Vite?", answer: "Uma ferramenta de build que permite desenvolvimento rápido"},
    {text: "O que é um componente?", answer: "Uma parte reutilizável de UI"},
    {text: "O que é estado em React?", answer: "Uma forma de armazenar dados que podem mudar ao longo do tempo"},
  ]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answerIsVisible, setAnswerIsVisible] = useState(false)
  

  const currentQuestion = questions[currentIndex]

  return (
    <>
    <Card text={answerIsVisible ? currentQuestion.answer : currentQuestion.text}/>
      <NavBar setCurrentIndex={setCurrentIndex} currentIndex={currentIndex}/>
      setCurrentIndex={setCurrentIndex}
      lastIndex={lastIndex}
    </>
  )
}

export default App
