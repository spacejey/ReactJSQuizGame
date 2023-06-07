import React from 'react'

// Components
import Home from './components/Home'
import QuizIndex from './components/main/QuizIndex'
import QuizPage from './components/main/QuizPage'
import QuizDifficalty from './components/main/QuizDifficalty'

// Bootstrap
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <div className='site-wrapper'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quizIndex' element={<QuizIndex />} />
          <Route path='/:quizCategory' element={<QuizDifficalty />} />
          <Route path='/:quizCategory/:quizId' element={<QuizPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App