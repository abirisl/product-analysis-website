import React from 'react';
import './Item.css'

const Item = ({item}) => {
    const {name,reviews} = item
    return (
        <div className='item'>
            <h5>{name}</h5>
            <p>{reviews}</p>
        </div>
    );
};

export default Item;