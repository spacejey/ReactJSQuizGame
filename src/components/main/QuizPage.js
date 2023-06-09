import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import DummyData from '../common/DummyData'

// Components
import GameOverModal from '../common/GameOverModal'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const QuizPage = () => {
  const { quizCategory, quizId } = useParams()
  const [selectedQuestions, setSelectedQuestions] = useState([])
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [isGameOver, setIsGameOver] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [selectedAnswers, setSelectedAnswers] = useState([])
  const currentQuestion = selectedQuestions[currentQuizIndex]
  console.log('currentQuestion', currentQuestion)


  useEffect(() => {
    const bringQuiz = async () => {
      try {
        const bringQuiz = await DummyData.filter(
          quiz => quiz.category === quizCategory && quiz.difficulty === quizId)
        console.log('bringQuiz', bringQuiz)
        setSelectedQuestions(bringQuiz)
      } catch (error) {
        console.log(error)
      }
    }
    bringQuiz()
  }, [quizCategory, quizId])

  const handleAnswerClick = (index) => {
    if (!currentQuestion) return
  
    const isCorrectAnswer = currentQuestion.answerOptions[index].isCorrect
    if (isCorrectAnswer) {
      setScore((prevScore) => prevScore + 10)
    }
  
    setSelectedAnswers((prevSelectedAnswers) => {
      const newSelectedAnswers = [...prevSelectedAnswers]
      newSelectedAnswers[currentQuizIndex] = index
      return newSelectedAnswers
    })
  
    setShowScore(true)
    setTimeout(handleNextQuiz, 300)
  }

  const handleNextQuiz = () => {
    if (currentQuizIndex === selectedQuestions.length - 1) {
      setIsGameOver(true)
    } else {
      setCurrentQuizIndex(currentQuizIndex + 1)
    }
  }

  return (
    <>
      <Button className='pre-btn' as={Link} to={'/'}> Home </Button>
      <Card className='quiz-card'>
        {isGameOver && <GameOverModal score={score} total={selectedQuestions.length * 10} />}
        {currentQuestion && (
          <>
            <Card.Header as="h6" className='quiz-top-text'>
              <div className='quiz-category'>{currentQuestion.category} - {currentQuestion.difficulty}</div>
              <div className='quiz-score'>
                Score: <span style={{ color: '#d478f5' }}>{score}</span> / {selectedQuestions.length * 10}
              </div>
            </Card.Header>
            <Card.Body>
              <div>
                <p></p>
              </div>
              <div className='question-text'>
                <Card.Title>
                  <span style={{ fontSize: '25px' }}>{currentQuestion.question}<br /></span>
                  <span style={{ fontSize: '17px', color: 'grey', marginLeft: '13px', fontStyle: 'italic' }}>
                    (Answer: {currentQuestion.answer})</span>
                </Card.Title>
              </div>
              <div className='answer-section'>
                {currentQuestion.answerOptions && currentQuestion.answerOptions.map((answerOption, index) => (
                  <div key={index} className='page-btns'>
                    <Button className='answer-btns' onClick={() => handleAnswerClick(index)}>
                      {answerOption.answerText}
                    </Button>
                  </div>
                ))}
              </div>
            </Card.Body>
          </>
        )}
      </Card>
    </>
  )
}

export default QuizPage
