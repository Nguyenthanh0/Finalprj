import React from 'react'
import './Homepage.css'
import Header from './Homepage/Header'
import Footer from './componentOfThanh/Footer'
import Main from './Homepage/Main/Main'


function Homepage() {
  return (
    <>
       <Header></Header>
       <Main></Main>
       <Footer></Footer>
    </>
  )
}

export default Homepage