import { Link } from 'react-router-dom'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import googleEyeImage from '../assets/googleeye.png'

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className='home-container'>
              <div className='home-text'>
                <img src={googleEyeImage} className='google-eye' />
                <h2 className='home-title'>ARE YOU<br />READY FOR 
                  <span style={{ color: '#7bff00' }}> QUIZ?</span>
                </h2>
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