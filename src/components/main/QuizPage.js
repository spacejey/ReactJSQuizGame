import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

// Bootstrap
import { Button, Container } from 'react-bootstrap'

// Components
import DummyData from '../common/DummyData'


const QuizPage = () => {
  const { quizId } = useParams()
  const [ quizData, setQuizData ] = useState({})
  const [ score, setScore ] = useState(0)
  const [ showScore, setShowScore ] = useState(false)

  useEffect(() => {
    const getQuiz = async () => {
      try {
        const quizStartData = await DummyData.find(quiz => quiz.id === Number(quizId))
        console.log('QUIZPAGE!=>', quizStartData)
        setQuizData(quizStartData)
      } catch (error) {
        console.log(error)
      }
    }
    getQuiz()
  }, [quizId])

  const handleAnswerClick = (index) => {
    const isCorrectAnswer = quizData.answerOptions[index].isCorrect
    if (isCorrectAnswer){
      console.log('Correct')
      setScore(score + 10)
    }
    setShowScore(true)
  }

  return (
    <>
      <Container>
        <div>
          <p>YOUR SCORE IS {score}</p>
          <div>
            <h4>{quizData.category}</h4>
            <h4>Difficulty: {quizData.difficulty}</h4>
          </div>
          <div className='question-text'>
            <h1>{quizData.question}</h1>
          </div>
          <div className='answer-section'>
            {quizData.answerOptions && quizData.answerOptions.map((answerOption, index) => (
              <button key={index} onClick={() => handleAnswerClick(index)}>{answerOption.answerText}</button>
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}

export default QuizPage
