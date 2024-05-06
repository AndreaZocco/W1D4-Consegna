import React, { useState, useEffect } from 'react';
import { Button, Form, ListGroup } from 'react-bootstrap';
import LoadingIndicator from '../Loading/Loading';
import ErrorDisplay from '../Errori/Error';
import { FaStar } from 'react-icons/fa'; 

const CommentForm = ({ asin }) => {
  const [commentData, updateCommentData] = useState({
    comment: '',
    rate: 1,
    elementId: null,
  });

  useEffect(() => {
    updateCommentData(prevData => ({
      ...prevData,
      elementId: asin
    }));
  }, [asin]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjM4ZTJhYmQ2MzdmMzAwMTVhZGJmMzAiLCJpYXQiOjE3MTUwMDQwNzUsImV4cCI6MTcxNjIxMzY3NX0.U3gX4yl8FBHUlRN6ExbD3m9X1vCvmAje7944Y5yubQU',
      },
    };

    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/comments', requestOptions);
      if (!response.ok) {
        throw new Error('Failed to submit the review');
      }
      alert('Review submitted successfully!');
      updateCommentData({ comment: '', rate: 1, elementId: null });
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="my-3">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2">
          <Form.Label>Recensione</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci qui il testo"
            value={commentData.comment}
            onChange={(e) => updateCommentData({
              ...commentData,
              comment: e.target.value,
            })}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Valutazione</Form.Label>
          <div className="d-flex align-items-center">
            {}
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                onClick={() => updateCommentData({ ...commentData, rate: index + 1 })}
                style={{ color: index < commentData.rate ? '#ffc107' : '#e4e5e9', cursor: 'pointer' }}
              />
            ))}
          </div>
        </Form.Group>
        <Button variant="primary" type="submit">
          Invia
        </Button>
      </Form>
    </div>
  );
};

const SingleComment = ({ comment, removeComment }) => (
  <ListGroup.Item data-testid="comment-item" className="d-flex justify-content-between align-items-center">
    <div>{comment.comment}</div>
    <div>
      {}
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          style={{ color: index < comment.rate ? '#ffc107' : '#e4e5e9' }}
        />
      ))}
      <Button
        variant="danger"
        className="ms-2"
        onClick={() => removeComment(comment._id)}
      >
        Delete
      </Button>
    </div>
  </ListGroup.Item>
);

const CommentList = ({ commentsToShow, removeComment }) => (
  <ListGroup style={{ color: 'black' }} className="mt-2">
    {commentsToShow.map(comment => (
      <SingleComment key={comment._id} comment={comment} removeComment={removeComment} />  
    ))}
  </ListGroup>
);

const ReviewsContainer = ({ asin }) => {
  const [reviews, updateReviews] = useState([]);
  const [loading, setLoadingState] = useState(false);
  const [hasError, setErrorState] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      setLoadingState(true);
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${asin}`,
          {
            headers: {
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjM4ZTJhYmQ2MzdmMzAwMTVhZGJmMzAiLCJpYXQiOjE3MTUwMDQwNzUsImV4cCI6MTcxNjIxMzY3NX0.U3gX4yl8FBHUlRN6ExbD3m9X1vCvmAje7944Y5yubQU',
            },
          }
        );
        if (!response.ok) {
          console.error('Failed to fetch reviews');
          setErrorState(true);
        } else {
          const fetchedReviews = await response.json();
          updateReviews(fetchedReviews);
        }
      } catch (error) {
        console.error('Fetching error:', error);
        setErrorState(true);
      } finally {
        setLoadingState(false);
      }
    };

    if (asin) {
      fetchReviews();
    }
  }, [asin]);

  const removeComment = async (commentId) => {
    try {
      const result = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${commentId}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjM4ZTJhYmQ2MzdmMzAwMTVhZGJmMzAiLCJpYXQiOjE3MTUwMDQwNzUsImV4cCI6MTcxNjIxMzY3NX0.U3gX4yl8FBHUlRN6ExbD3m9X1vCvmAje7944Y5yubQU',
          },
        }
      );
      if (!result.ok) {
        throw new Error('Failed to delete the comment');
      }
      updateReviews(reviews.filter(comment => comment._id !== commentId));
      alert('Comment deleted successfully!');
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="text-center">
      {loading && <LoadingIndicator />}
      {hasError && <ErrorDisplay />}
      <CommentForm asin={asin} />
      <CommentList commentsToShow={reviews} removeComment={removeComment} />
    </div>
  );
};

export default ReviewsContainer;
