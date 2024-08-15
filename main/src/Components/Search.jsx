import React from 'react'
import '../Css/Search.css'
import { CiSearch } from "react-icons/ci";
function Search() {
  return (
    <div>
        <div>
        <CiSearch className='seacrhIcon'/>
          <div><input type='text' placeholder='Search' className='search'></input></div>
        </div>
    </div>
  )
}

export default Search
