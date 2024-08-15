import React from 'react';
import Data2 from '../../Data2';
import CarCard2 from './CarCard2';

const CarList2 = () => {
    return (
        <div className="car-list">
            {Data2.map((car) => (
                <CarCard2 key={car.id} car={car} />
                
            ))}
            
        </div>
    );
};

export default CarList2;