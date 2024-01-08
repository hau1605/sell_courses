import React, { useState } from 'react';
import RatingStars from 'react-rating-stars-component';
import "./CourseRating.css";

const CourseRating = ({ courseId, handleRatingSubmit }) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const submitRating = () => {
    handleRatingSubmit(courseId, rating);
  };

  return (
    <div className='rating_container'>
      <RatingStars
        classNames={"s"}
        rating={rating}
        starRatedColor="gold"
        changeRating={handleRatingChange}
      />
      <button type='submit' className='btn btn-primary' onClick={submitRating}>Gửi đánh giá của bạn</button>
    </div>
  );
};

export default CourseRating;