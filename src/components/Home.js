import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

import QuizIndex from './main/QuizIndex'


const Home = () => {
  return (
    <>
      <Link to='/quizIndex'>
        <Button>Start!</Button>
      </Link>
    </>
  )
}

export default Home