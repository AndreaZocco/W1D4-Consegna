import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';


const SingleBook = ({ setSelected, selected, book }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    setSelected(book.asin === selected ? null : book.asin);
  };

  const handleDetailsButtonClick = (event) => {
    event.stopPropagation();
    navigate(`/details/${book.asin}`);
  };

  return (
    <>
      <Card
        onClick={handleCardClick}
        style={{
          border: selected === book.asin ? '3px solid red' : 'none',
          cursor: 'pointer',
        }}
        data-testid="book-card"
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>{book.title}</Card.Title>
          <Button
            className="w-100 mt-2"
            onClick={handleDetailsButtonClick}
          >
            DETTAGLI LIBRO
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;
