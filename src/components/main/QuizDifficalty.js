import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

// Bootstrap
import { Button, Container } from 'react-bootstrap'

// Components
import DummyData from '../common/DummyData'


const QuizDifficulty = () => {

  // state
  const { quizCategory } = useParams()
  const [ selectedQuiz, setSelectedQuiz ] = useState([])

  //! On Mount
  useEffect(() => {
    const getDifficulty = async () => {
      try {
        const selectQuizData = await DummyData.filter(quiz => quiz.category === quizCategory)
        console.log('selectQuizData =>', selectQuizData)
        setSelectedQuiz(selectQuizData)
      } catch (error) {
        console.log(error)
      }
    }
    getDifficulty()
  }, [quizCategory])


  return (
    <>
      <Container>
        {selectedQuiz.map((data, index) => (
          <Link key={index} to={`/quizPage/${data.id}`}>
            <Button >
              {data.difficulty}
            </Button>
          </Link>
        ))}
      </Container>
    </>
  )
}

export default QuizDifficulty