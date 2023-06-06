import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// Bootstrap
import { Button, Container } from 'react-bootstrap'

// Components
import DummyData from '../common/DummyData'

const QuizIndex = () => {

  return (
    <>
      <Container>
        {DummyData.map((data, index) => (
          <Link key={index} to={`/difficulty/${data.id}`}>
            <Button >
              {data.category}
            </Button>
          </Link>
        ))}
      </Container>
    </>
  )

}

export default QuizIndex