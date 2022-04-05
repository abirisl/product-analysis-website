import React from 'react';
import useReviews from '../../hooks/customerReviews';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
   const [ reviews, setReviews] = useReviews()
    return (
        <div className='all-review'>
            {
                reviews.map(review => <Review review={review}></Review>)
            }
        </div>
    );
};

export default Reviews;