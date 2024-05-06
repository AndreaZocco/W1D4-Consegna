import { Col, Row, Card } from 'react-bootstrap';
import horrorList from '../../data/horror.json';
import BookDisplay from '../Libro/SingleBook'; 
import ReviewSection from '../RecensioniECommenti/Comments'; 
import { useState } from 'react';

const BookCollection = ({ searchQuery }) => {
  const [currentBook, setCurrentBook] = useState(null); 

  const filterBooksByQuery = (book) => book.title.toLowerCase().includes(searchQuery.toLowerCase());

  return (
    <Row className="mt-4">
      {}
      <Col md={8}>
        <h2 className="mb-4">Horror Books</h2>
        <Row className="g-3">
          {horrorList
            .filter(filterBooksByQuery)
            .map((book) => (
              <Col xs={12} md={4} key={book.asin}>
                <BookDisplay
                  book={book}
                  selected={currentBook === book.asin}
                  setSelected={setCurrentBook}
                />
              </Col>
            ))}
        </Row>
      </Col>
      {}
      <Col md={4}>
        <Card>
          <Card.Body>
            <h2 className="mb-4">Reviews</h2>
            <ReviewSection asin={currentBook} />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default BookCollection;