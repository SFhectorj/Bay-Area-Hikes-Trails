import React from 'react';
import { hikes } from '../data.js';
import Card from './Card.jsx';
import './Board.css';

const Board = () => {
    return (
        <div className='board'>
            {hikes.map(hike => (
                <Card key={hike.id} name={hike.name} location={hike.location} description={hike.description}/>
            ))}
        </div>
    );
};

export default Board;
