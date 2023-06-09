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

  const filterAnswerCount = (index) => {
    if (selectedQuiz.length > 0) {
      const currentQuestion = selectedQuiz[currentQuizIndex]
      const correctAnswers = currentQuestion.answerOptions.filter(
        answerOption => answerOption.isCorrect === true
      )
      const answerCount = correctAnswers.length
      console.log(`Number of Correct Answers: ${answerCount}`)

  const handleAnswerClick = (index) => {
    if (currentQuestion) {
      const isCorrectAnswer = currentQuestion.answerOptions[index].isCorrect
      if (isCorrectAnswer) {
        console.log('Correct')
        setScore(score + 10)
      }
      setSelectedAnswers(prevState => {
        const newSelectedAnswers = [...prevState]
        newSelectedAnswers[currentQuizIndex] = index
        return newSelectedAnswers
      })
      setShowScore(true)
      setTimeout(handleNextQuiz, 300)
    }
  }


  // const handleAnswerClick = (index) => {
  //   const isCorrectAnswer = currentQuestion.answerOptions[index].isCorrect
  //   if (currentQuestion) {
  //     if (isCorrectAnswer) {
  //       console.log('Correct')
  //       setScore(score + 10)
  //     } else {
  //       console.log('Worng') 
  //     }
  //   }
  //   handleNextQuiz()
  // }
  
  
  const handleNextQuiz = () => {
    if (currentQuizIndex === selectedQuiz.length - 1){
      setIsGameOver(true)
    } else {
      setCurrentQuizIndex(currentQuizIndex + 1)
    }
  }


  return (
<<<<<<< HEAD
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
                  <Button onClick={() => filterAnswerCount(index)}>{answerOption.answerText}</Button>
                </div>
              ))}
            </div>
          </Card.Body>
        </>
      )}
    </Card>
=======
    <>
      <Button className='pre-btn' as={Link} to={'/'}> Home </Button>
      <Card className='quiz-card'>
        {isGameOver && <GameOverModal score={score}/>}
        {currentQuestion && (
          <>
            <Card.Header as="h6" className='quiz-top-text'>
              <div className='quiz-categoty'>{currentQuestion.category} - {currentQuestion.difficulty}</div>
              <div className='quiz-score'>
                Score: <span style={{ color: '#d478f5' }}>{score}</span> / {selectedQuiz.length * 10}
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
                      {answerOption.answerText}</Button>
                  </div>
                ))}
              </div>
            </Card.Body>
          </>
        )}
      </Card>
    </>
>>>>>>> styling
  )
}

export default QuizPage
