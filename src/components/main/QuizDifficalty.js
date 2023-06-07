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

  const handleButtonClick = (difficulty) => {
    const filteredQuiz = selectedQuiz.filter(data => data.difficulty === difficulty)
    console.log(`문제 리스트 (${difficulty} 난이도):`, filteredQuiz)
    window.location.href = `/${quizCategory}/${difficulty}`
  }


  return (
    <>
      <Container>
        {[...new Set(selectedQuiz.map((data) => data.difficulty))].map((difficulty, index) => (
          // <Link key={index} to={`/quizPage/${difficulty}`}>
          <Button key={index} onClick={() => handleButtonClick(difficulty)} >
            {difficulty}
          </Button>
          // </Link>
        ))}
      </Container>
    </>
  )
}

export default QuizDifficulty