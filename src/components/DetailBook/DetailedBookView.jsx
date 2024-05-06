import { Card, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import FeedbackSection from '../RecensioniECommenti/Comments'
import horrorData from '../../data/horror.json'

const DetailedBookView = () => {
  const { asin } = useParams()
  const bookDetails = horrorData.find(book => book.asin === asin)

  return (
    <Row className="justify-content-center">
      <Col md={8}>
        <Card>
          <Card.Img variant="top" src={bookDetails.img} />
          <Card.Body>
            <Card.Title style={{ color: 'dark' }}>
              {bookDetails.title}
            </Card.Title>
          </Card.Body>
        </Card>
        <FeedbackSection asin={asin} />
      </Col>
    </Row>
  )
}

export default DetailedBookView;