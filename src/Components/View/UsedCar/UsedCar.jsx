import React from 'react';
import FilterSidebar from '../../FilterSidebar';
import Search from '../../Search';
import Result from '../../Result';
import CarList2 from '../../Card2/CarList2';
import Page from '../../Page/Page';
import Header from '../../Header/Header';
import './UsedCar.css'
const UsedCar = () => {
    return (
        <div>
            <Header title="Used Cars" description="Homepage - Used Cars"></Header>
            <main style={{ display: 'flex' ,background:'black'}}>
        <FilterSidebar />
        <div style={{display:'flex', flexDirection:'column',margin:'148px'}}>
        <Search></Search>
          <Result></Result>
          <CarList2></CarList2>
          <Page></Page>
        </div>
      </main>
        </div>
    );
}

export default UsedCar;
