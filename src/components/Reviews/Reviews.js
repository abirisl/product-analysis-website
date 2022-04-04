import React from 'react';
import useReviews from '../../hooks/customerReviews';
import Review from '../Review/Review';

const Reviews = () => {
   const [ reviews, setReviews] = useReviews()
    return (
        <div>
            {
                reviews.map(review => <Review review={review}></Review>)
            }
        </div>
    );
};

export default Reviews;