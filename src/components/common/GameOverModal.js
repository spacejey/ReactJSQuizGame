import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// Bootstrap
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function GameOverModal({ score, total }) {
  const [show, setShow] = useState(false)
  const navigate = useNavigate()

  const handleAgainClick = () => {
    navigate(-1)
  }

  useEffect(() => {
    setShow(true)
  }, [])

  return (
    <>
      <Modal
        show={show}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Game Over!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your Score: {score}/ {total}!
        </Modal.Body>
        <Modal.Footer>
          <Link to={'/quizIndex'}>
            <Button variant="primary">Back to Index</Button>
          </Link>
          <Button onClick={handleAgainClick} variant="primary">Again!</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default GameOverModal