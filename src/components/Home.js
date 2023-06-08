import { Link } from 'react-router-dom'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Home = () => {
  return (
    <main>
      <Container xs={{ span: 10 }} sm={{ span: 6 }} md={{ span: 4 }}>
        <Row>
          <Col>
            <div className='home-container'>
              <h2 className='home-title'>Let&apos;s Quiz!</h2>
              <Link to='/quizIndex'>
                <Button className='start-btn'>Start!</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default Home