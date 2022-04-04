import React from 'react';
import useReviews from '../../hooks/customerReviews';

const Reviews = (props) => {
    const [reviews, setReviews] = useReviews()
    return (
        <div>
           {
               reviews.map(review=> <p>{review.name}</p>)
           }
        </div>
    );
};

export default Reviews;