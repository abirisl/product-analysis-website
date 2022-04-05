import React from 'react';
import './Review.css'

const Review = ({review}) => {
    const {name,reviews} = review
    return (
        <div className='review-item'>
            <h4>{name}</h4>
            <p>{reviews}</p>
        </div>
    );
};

export default Review;