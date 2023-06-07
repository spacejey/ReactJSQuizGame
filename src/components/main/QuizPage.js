import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

// Bootstrap
import { Button, Container } from 'react-bootstrap'

// Components
import DummyData from '../common/DummyData'


const QuizPage = () => {
  const { quizId } = useParams()
  const [ quizData, setQuizData ] = useState([])
  const [ score, setScore ] = useState(0)
  const [ showScore, setShowScore ] = useState(false)
  const [ currentQuizIndex, setCurrentQuizIndex ] = useState(0)

  useEffect(() => {
    const getQuizzes = async () => {
      try {
        const matchingQuizzes = await DummyData.filter(quiz => quiz.id === Number(quizId))
        console.log('QUIZPAGE!=>', matchingQuizzes)
        setQuizData(matchingQuizzes)
      } catch (error) {
        console.log(error)
      }
    }
    getQuizzes()
  }, [quizId])

  const handleAnswerClick = (index) => {
    if (currentQuestion) {
      const isCorrectAnswer = currentQuestion.answerOptions[index].isCorrect
      if (isCorrectAnswer){
        console.log('Correct')
        setScore(score + 10)
        handleNextQuiz()
      }
      setShowScore(true)
    }
  }
  
  const handleNextQuiz = () => {
    setCurrentQuizIndex(currentQuizIndex + 1)
  }

  const currentQuestion = quizData[currentQuizIndex]

  return (
    <>
      <Container>
        <div>
          <h4>Score: {score}</h4>
          {currentQuestion && (
            <>
              <div>
                <h4>{currentQuestion.category}</h4>
                <h4>Difficulty: {currentQuestion.difficulty}</h4>
              </div>
              <div className='question-text'>
                <h1>{currentQuestion.question}</h1>
              </div>
              <div className='answer-section'>
                {currentQuestion.answerOptions && currentQuestion.answerOptions.map((answerOption, index) => (
                  <button key={index} onClick={() => handleAnswerClick(index)}>{answerOption.answerText}</button>
                ))}
              </div>
            </>
          )}
        </div>
      </Container>
    </>
  )
}

export default QuizPage
