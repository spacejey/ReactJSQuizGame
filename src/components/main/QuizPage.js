import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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
  const [ selectedQuiz, setSelectedQuiz ] = useState([])
  const [ currentQuizIndex, setCurrentQuizIndex ] = useState(0)
  const [ score, setScore ] = useState(0)
  const [ showScore, setShowScore ] = useState(false)
  const [ isGameOver, setIsGameOver ] = useState(false)
  const [ showModal, setShowModal ] = useState(false)
  const [ selectedAnswers, setSelectedAnswers ] = useState([])
  const currentQuestion = selectedQuiz[currentQuizIndex]
  console.log('currentQuestion', currentQuestion)
  
  useEffect(() => {
    const bringQuiz = async () => {
      try {
        const bringQuiz = await DummyData.filter(
          quiz => quiz.category === quizCategory && quiz.difficulty === quizId)
        console.log('bringQuiz', bringQuiz)
        setSelectedQuiz(bringQuiz)
      } catch (error) {
        console.log(error)
      }
    }
    bringQuiz()
  }, [quizCategory, quizId])


  const handleAnswerClick = (index) => {
    const userSelectedAnswer = currentQuestion.answer
    console.log('User selected answer:', userSelectedAnswer)
    if (userSelectedAnswer === 'Double') {
      const correctAnswerCount = currentQuestion.answerOptions.filter(
        (answerOption) => answerOption.isCorrect).length
    
      console.log('Number of correct answers:', correctAnswerCount)
    }

    const isCorrectAnswer = currentQuestion.answerOptions[index].isCorrect
    if (currentQuestion) {
      if (isCorrectAnswer) {
        console.log('Correct')
        setScore(score + 10)
      } else {
        console.log('Worng')
      }
      setShowScore(true)
    }
    handleNextQuiz()
  }
  

  const handleNextQuiz = () => {
    if (currentQuizIndex === selectedQuiz.length - 1){
      setIsGameOver(true)
    } else {
      setCurrentQuizIndex(currentQuizIndex + 1)
    }
  }


  return (
    <Card className='quiz-card'>
      {isGameOver && <GameOverModal score={score} total={selectedQuiz.length * 10}/>}
      {currentQuestion && (
        <>
          <Card.Header as="h6">[ {currentQuestion.category} - {currentQuestion.difficulty} ] [ Score: {score}/ {selectedQuiz.length * 10} ] </Card.Header>
          <Card.Body>
            <div>
              <p>Answer: {currentQuestion.answer}</p>
            </div>
            <div className='question-text'>
              <Card.Title>{currentQuestion.question}</Card.Title>
            </div>
            <div className='answer-section'>
              {currentQuestion.answerOptions && currentQuestion.answerOptions.map((answerOption, index) => (
                <div key={index} className='page-btns'>
                  <Button onClick={() => handleAnswerClick(index)}>{answerOption.answerText}</Button>
                </div>
              ))}
            </div>
          </Card.Body>
        </>
      )}
    </Card>
  )
}

export default QuizPage
