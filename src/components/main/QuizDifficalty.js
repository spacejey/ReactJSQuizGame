import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

// Components
import DummyData from '../common/DummyData'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


const QuizDifficulty = () => {
  const { quizCategory } = useParams()
  const [ selectedQuiz, setSelectedQuiz ] = useState([])
  

  useEffect(() => {
    const getDifficulty = async () => {
      try {
        const selectQuizData = await DummyData.filter(quiz => quiz.category === quizCategory)
        setSelectedQuiz(selectQuizData)
      } catch (error) {
        console.log(error)
      }
    }
    getDifficulty()
  }, [quizCategory])
  

  const handleButtonClick = (difficulty) => {
    const filteredQuiz = selectedQuiz.filter(data => data.difficulty === difficulty)
    window.location.href = `/${quizCategory}/${difficulty}`
  }


  return (
    <>
      <Container>
        <Row>
          <Col className='difficulty-container'>
            <div className='difficulty-text'>
              <Button className='pre-btn' as={Link} to={'/quizIndex'}> back </Button>
              <h2 className='difficulty-title'>Choose <br /> 
                <span style={{ textDecoration: 'underLine' }}>Difficulty!</span></h2>
              {[...new Set(selectedQuiz.map((data) => data.difficulty))].map((difficulty, index) => (
                <div  key={index} className='difficulty-btns'>
                  <Button className={difficulty} onClick={() => handleButtonClick(difficulty)} >
                    {difficulty}
                  </Button>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default QuizDifficulty