import React from 'react';
import '../Css/FilterSidebar.css';
import RangeSlider from './RangeSlider/RangeSlider';

const FilterSidebar = () => {
    const yearOptions = [2016, 2017, 2018, 2019];
    const brandOptions = ['Audi', 'BMW', 'Chevrolet', 'Ford'];
    const filterCategories = [
        'Model', 'Body Type', 'Transmission', 'Fuel Type', 'Drivetrain', 'Passenger Capacity', 'Exterior Color'
    ];

    return (
        <div className="filter-sidebar">
            <div className='Filter'>
                <h2 className='underline'>Filter</h2>
            </div>
            <div className="filter-section">
                <input type="text" placeholder="Search" className="filter-search"></input>  
            </div>
            <div className="filter-section2">
                <div className="filter-options">
                    <select className='year-select'>
                        <option value=''>Year</option>
                    </select>
                    {yearOptions.map((year, index) => (
                        <label key={index}><input type="checkbox" /> {year}</label>
                    ))}
                    <a href="#" className="see-more">See More</a>
                </div>
            </div>
            {/* <div className="condition">

            </div> */}
            <div className="filter-section3">
                <select className='brand-select'>
                    <option value=''>Brand</option>
                </select>
                <input type="text" placeholder="Search here" className="filter-search2" />
                <div className="filter-options">
                    {brandOptions.map((brand, index) => (
                        <label key={index}><input type="checkbox" /> {brand}</label>
                    ))}
                    <a href="#" className="see-more2">See More</a>
                </div>
            </div>
            <div className="filter-section">
                <div className="filter-options">
                    {filterCategories.map((category, index) => (
                        <select className='bodytype-select' key={index}>
                            <option value=''>{category}</option>
                        </select>
                    ))}
                </div>
            </div>
            <RangeSlider />
            
        </div>
    );
};

export default FilterSidebar;
