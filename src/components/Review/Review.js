import React from 'react';

const Review = ({review}) => {
    const {name,reviews} = review
    return (
        <div>
            <h4>{name}</h4>
            <p>{reviews}</p>
        </div>
    );
};

export default Review;