import React from 'react';
import Data from '../../Data';
import CarCard from './CarCard';

const CarList = () => {
    return (
        <div className="car-list">
            {Data.map((car) => (
                <CarCard key={car.id} car={car} />
            ))}
        </div>
    );
};

export default CarList;
