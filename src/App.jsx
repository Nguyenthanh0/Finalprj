import React from 'react';

import NavBar from './Components/NavBar';
import Header from './Components/Header';
import FilterSidebar from './Components/FilterSidebar';
import Search from './Components/Search';
import SearchResult from './Components/SearchResult/SearchResult';
import Result from './Components/Result';
import Result2 from './Components/Result2/Result2';
// import CarList from './Components/Card/CarList';
// import CarList2 from './Components/Card2/CarList2';
import CarList3 from './Components/Card3/CarList3';
import CarList2 from './Components/Card2/CarList2';
import Review from './Components/Review/Review';
import Page from './Components/Page/Page'
import NewCar from './Components/View/NewCar/NewCar';
import UsedCar from './Components/View/UsedCar/UsedCar';
import SearchResult1 from './Components/View/SearchResult1/SearchResult1';
import SearchResult2 from './Components/View/SeacrhResult2/SearchResult2';
import Homepage from './Homepage';
import './App.css'
function App() {
  return (
    
    <div className='container'>
      <Homepage></Homepage>
      {/* <NewCar></NewCar> */}
      {/* <UsedCar></UsedCar> */}
      {/* <SearchResult1></SearchResult1> */}
      {/* <SearchResult></SearchResult> */}
      {/* <SearchResult2></SearchResult2> */}
        {/* <div className='headerContent'>
            <h1>Used Cars</h1>
            <p>Homepage - Used Cars</p>
        </div> */}
        {/* <div className='headerContent'>
            <h1>Search Result</h1>
            <p>Homepage - Search - Search Result</p>
        </div> */}
        {/* <div className='headerContent'>
            <h1>Search Result</h1>
            <p>Homepage - Search - Search Result</p>
        </div> */}
      {/* </Header>  */}
      {/* <Header><NavBar></NavBar></Header> */}
      {/* <main style={{ display: 'flex' ,background:'black',width:'100%'}}>
        <FilterSidebar /> 
        <div style={{display:'flex', flexDirection:'column',margin:'148px'}}>
          <Search></Search>
          <Result></Result>
          <CarList></CarList>
          <Page></Page>
        </div>
        
      </main> */}
      {/* <main style={{ display: 'flex' ,background:'black'}}>
        <FilterSidebar />
        <div style={{display:'flex', flexDirection:'column',margin:'148px'}}>
        <Search></Search>
          <Result></Result>
          <CarList2></CarList2>
          <Page></Page>
        </div>
      </main> */}
      {/* <main style={{ display: 'flex' ,background:'black'}}>
        <FilterSidebar />
        <div style={{display:'flex', flexDirection:'column',margin:'148px'}}>
        <Search></Search>
          <Result2></Result2>
          <CarList3></CarList3>
          
          <Page></Page>
        </div>
      </main> */}
      {/* <main style={{ display: 'flex' ,background:'black'}}>
        <FilterSidebar />
        <div style={{display:'flex', flexDirection:'column',margin:'148px'}}>
        <Search></Search>
          <Result2></Result2>
          <SearchResult></SearchResult>
           <CarList3></CarList3>
           <Page></Page>
        </div>
      </main> 
       */}

    </div>
  );
}

export default App;