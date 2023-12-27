
import { useState } from 'react'
import './App.css'
import quizQuestion from "./components/quizQuestions.json"
import { useNavigate } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Quiz from './components/quiz'
import Result from './components/Result'


function App() {

  const navigate = useNavigate()

  const [score,setScore] = useState(0)
  const [count,setCount] = useState(0)
  const [questionAnswered,setquestionAnswered] = useState({
    WrongAnswers:0,
    Attempted:0,
  })



  const updateScore = () => {
    setScore(score+1)
  }
  
  const updateAnswers = (value) => {
    console.log("attempted",questionAnswered.Attempted)
    setquestionAnswered((prevQuestionAnswered) => ({
      ...prevQuestionAnswered,
      WrongAnswers: value === "wrong" ? prevQuestionAnswered.WrongAnswers + 1 : prevQuestionAnswered.WrongAnswers,
      Attempted: value !== "wrong" ? prevQuestionAnswered.Attempted + 1 : prevQuestionAnswered.Attempted,
    }));
  };
  

  const handleCount = (value) => {
    value == "left" ? 
    count != 0 ? setCount(count - 1) : setCount(0):
    count == quizQuestion.length - 1 ? navigate("/result") : setCount(count+1)
}

  return (
    <>
      <Routes>
        <Route path='/project-react-quiz-app-three' element={<Home 
          setCount={setCount} 
          setScore={setScore} 
          setquestionAnswered={setquestionAnswered}
          questionAnswered={questionAnswered} />}/>
        <Route path='/project-react-quiz-app-three/quiz' element={<Quiz 
          updateScore={updateScore} 
          count={count} 
          handleCount={handleCount}
          updateAnswers={updateAnswers} />}/>
        <Route path='/project-react-quiz-app-three/result' element={<Result 
          score={score} 
          questionAnswered={questionAnswered}
          count={count} 
          setCount={setCount} 
          setScore={setScore} 
          setquestionAnswered={setquestionAnswered}
            />}/>
    </Routes>
    </>
  )
}

export default App
