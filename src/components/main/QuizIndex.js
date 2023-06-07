import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// Bootstrap
import { Button, Container } from 'react-bootstrap'

// Components
import DummyData from '../common/DummyData'

const QuizIndex = () => {
  const [ indexData, setIndexData ] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const indexCategory = Array.from(new Set(DummyData.map(data => data.category)))
        const selectedCategory = indexCategory.map(category => ({ category }))
        setIndexData(selectedCategory)
        console.log('selectedCategory=>', selectedCategory)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  return (
    <>
      <Container>
        {indexData.map((data, index) => (
          <Link key={index} to={`/${data.category}`}>
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