import { Link } from 'react-router-dom'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className='home-container'>
              <div className='home-text'>
                <h2 className='home-title'>Let&apos;s Quiz!</h2>
                <Link to='/quizIndex'>
                  <Button className='start-btn'>Start!</Button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home