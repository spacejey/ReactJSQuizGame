import React from 'react'

// Components
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
          <Route path='/' element={<QuizIndex />} />
          <Route path='/quizPage' element={<QuizPage />} />
          <Route path='/difficalty' element={<QuizDifficalty />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
