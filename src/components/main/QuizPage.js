import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

// Bootstrap
import { Button, Container } from 'react-bootstrap'

// Components
import DummyData from '../common/DummyData'


const QuizPage = () => {
  const { quizId } = useParams()
  const [quizData, setQuizData] = useState([])

  useEffect(() => {
    const getQuiz = async () => {
      try {
        const quizStartData = await DummyData.filter(quiz => quiz.id === Number(quizId))
        console.log('QUIZPAGE!=>', quizStartData)
        setQuizData(quizStartData)
      } catch (error) {
        console.log(error)
      }
    }
    getQuiz()
  }, [quizId])


  return (
    <>
      <Container>
        <h1>QuizPage</h1>
      </Container>
    </>
  )
}

export default QuizPage