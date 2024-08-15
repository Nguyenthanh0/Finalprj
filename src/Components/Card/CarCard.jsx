import React from 'react';
import { Link } from 'react-router-dom';
import './CarCard.css';
import Review from '../Review/Review';

const CarCard = ({ car }) => {
    return (
        <div className="car-card">
            <img src={car.image} alt={car.name} className="car-image" />
            <div className="car-info">
                <div className='new1'><p>New</p></div>
                <h3>{car.name}</h3>
                <Link to={`/car-detail/${car.id}`}>
                    <h3 style={{ color: '#007CC7' }}>{car.price}</h3>
                </Link>
                <p>{car.place}</p>
                <div className="car-infor">
                    <div><p>{car.year}</p></div>
                    <div><p>{car.style}</p></div>
                    <div><p>{car.energy}</p></div>
                    <div><p>{car.seat} seats</p></div>
                </div>
                <Review />
            </div>
        </div>
    );
};

export default CarCard;