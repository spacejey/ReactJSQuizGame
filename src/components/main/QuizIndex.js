import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// Components
import DummyData from '../common/DummyData'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


const QuizIndex = () => {
  const [ indexData, setIndexData ] = useState([])


  useEffect(() => {
    const getData = () => {
      try {
        const indexCategory = Array.from(new Set(DummyData.map(data => data.category)))
        const selectedCategory = indexCategory.map(category => ({ category }))
        setIndexData(selectedCategory)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])


  return (
    <>
      <Container>
        <Row>
          <Col className='index-container'>
            <div className='index-text'>
              <Button className='pre-btn' as={Link} to={'/'}> back </Button>
              <h1 className='index-title'>Choose <br />
                <span style={{ textDecoration: 'underLine' }}>Category!</span></h1>
              {indexData.map((data, index) => (
                <Link key={index} to={`/${data.category}`}>
                  <div className='index-btns'>
                    <Button className={`${data.category}`}>
                      {data.category}
                    </Button>
                  </div>
                </Link>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )

}

export default QuizIndex


