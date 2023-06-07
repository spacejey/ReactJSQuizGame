import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DummyData from '../common/DummyData'

// Components
import GameOverModal from '../common/GameOverModal'

// Bootstrap
import { Container } from 'react-bootstrap'

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
  
  useEffect(() => {
    const bringQuiz = async () => {
      try {
        const bringQuiz = await DummyData.filter(
          quiz => quiz.category === quizCategory && quiz.difficulty === quizId)
        console.log(bringQuiz)
        setSelectedQuiz(bringQuiz)
      } catch (error) {
        console.log(error)
      }
    }
    bringQuiz()
  }, [quizCategory, quizId])


  const handleAnswerClick = (index) => {
    if (currentQuestion) {
      const isCorrectAnswer = currentQuestion.answerOptions[index].isCorrect
      if (isCorrectAnswer) {
        console.log('Correct')
        setScore(score + 10)
        handleNextQuiz()
      }
      setShowScore(true)
    }
  }


  const handleNextQuiz = () => {
    if (currentQuizIndex === selectedQuiz.length - 1){
      setIsGameOver(true)
    } else {
      setCurrentQuizIndex(currentQuizIndex + 1)
    }
  }


  return (
    <Container>
      {isGameOver && <GameOverModal score={score}/>}
      <div>
        <h4>Score: {score}</h4>
        {currentQuestion && (
          <>
            <div>
              <h4>{currentQuestion.category}</h4>
              <h4>Difficulty: {currentQuestion.difficulty}</h4>
              <h4>Answer: {currentQuestion.answer}</h4>
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
  )
}

export default QuizPage
