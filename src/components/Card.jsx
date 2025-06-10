import React from 'react';
import './Card.css';

const Card = ({ name, location, description}) => {
    return (
        <div className='card'> 
            <div className='card-content'>
                <h3 className='card-title'>{name}</h3>
                <p className='card-location'>{location}</p>
                <p className='card-description'>{description}</p>
            </div>
        </div>
    );
};

export default Card;
