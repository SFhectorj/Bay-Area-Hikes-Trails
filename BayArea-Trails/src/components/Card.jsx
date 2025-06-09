import React from 'react';

const Card = ({ name, location, description}) => {
    return (
        <div className='card'> 
            <img src={image} alt={name} className='card-image' />
            <div className='card-content'>
                <h3 className='card-title'>{name}</h3>
                <p className='card-location'>{location}</p>
                <p className='card-description'>{description}</p>
            </div>
        </div>
    );
};

export default Card;