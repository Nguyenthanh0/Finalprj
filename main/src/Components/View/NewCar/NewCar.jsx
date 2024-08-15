import React from 'react';


import FilterSidebar from '../../FilterSidebar';
import Search from '../../Search';
import Result from '../../Result';
import CarList from '../../Card/CarList';
import Page from '../../Page/Page';
import Header from '../../Header/Header';
import Navbar from '../../NavBar';
import './NewCar.css'
const NewCar = () => {
    return (
        <div>
       <Header title="New Cars" description="Homepage - New Cars"></Header>
       {/* <Navbar></Navbar> */}
       <main style={{ display: 'flex' ,background:'black'}}>
        <FilterSidebar /> 
        <div style={{display:'flex', flexDirection:'column',margin:'148px'}}>
          <Search></Search>
          <Result></Result>
          <CarList></CarList>
          <Page></Page>
        </div>
        
      </main>
       
           
            
        </div>
    );
}

export default NewCar;
