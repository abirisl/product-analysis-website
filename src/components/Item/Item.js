import React from 'react';
import './Item.css'

const Item = ({item}) => {
    const {name,reviews} = item
    return (
        <div className='item'>
            <h3>{name}</h3>
            <p>{reviews}</p>
        </div>
    );
};

export default Item;