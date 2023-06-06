import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

// Bootstrap
import { Button, Container } from 'react-bootstrap'

// Components
import DummyData from '../common/DummyData'


const QuizDifficulty = () => {

  // state
  const { quizId } = useParams()
  const [ selectDifficulty, setSelectDifficulty ] = useState([])

  //! On Mount
  useEffect(() => {
    const getDifficulty = async () => {
      try {
        const quizDifficulty = DummyData[quizId - 1].questions.map(
          (question) => question.difficulty
        )
        console.log(quizDifficulty)
        setSelectDifficulty(quizDifficulty)
      } catch (error) {
        console.log(error)
      }
    }
    getDifficulty()
  }, [quizId])


  return (
    <>
      <Container>
        {selectDifficulty.map((data, index) => (
          <Button key={index}>
            {data}
          </Button>
        ))}
      </Container>
    </>
  )
}

export default QuizDifficulty