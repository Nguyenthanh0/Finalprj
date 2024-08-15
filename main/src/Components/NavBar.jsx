import React from 'react';
import '../Css/NavBar.css'; 
import img1 from '../img/anh01.png';
import { FaUser } from "react-icons/fa6";
import { GrLanguage } from "react-icons/gr";
import {Link} from 'react-router-dom';

const Navbar = () => {
    // const menuItems = [
    //     { name: 'New Cars', link: '/new-cars' },
    //     { name: 'Used Cars', link: '/used-cars' },
    //     { name: 'Compare', link: '/compare' },
    //     { name: 'Sell', link: '/sell' }
    // ];

    return (
        <nav className="navbar">
            {/* <div className="navbar-logo">
                <img src={img1} alt="AutoHunt Logo" width="118" height="32" />
            </div>
            <ul className="navbar-menu">
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <a href={item.link}>{item.name}</a>
                    </li>
                ))}
                <li>
                    <select className="article-select">
                        <option value="">Artical</option>
                   
                    </select>
                    
                </li>
            </ul>
            <div className="navbar-right">
                <div className='signIn'>
                  <FaUser />
                  <a href="/sign-in" className="sign-in">Sign In</a>                  
                </div>
                <div className='language'>
                  <GrLanguage className='lIcon' />
                  <select className="language-select">
                    <option value="en">EN</option>
                 
                </select>  
                </div>
                
            </div> */}
            <ul className='view'>
                <li>
                <Link to="/homepage"><img src={img1} alt="AutoHunt Logo" width="118" height="32" /></Link>
                </li>
                <li>
                <Link to="/newcars">New Cars</Link>
                </li>
                <li>
                <Link to="/usedcars">Used Cars</Link>
                </li>
                <li>
                <Link to="">Compare</Link>
                </li>
                <li>
                <Link to="">Sell</Link>
                </li>
                <li>
                <Link to="">
                <select className="article-select">
                        <option value="">Artical</option>
                   
                    </select>
                </Link>
                </li>
            </ul>
           
            <div className="navbar-right">
                <div className='signIn'>
                  <FaUser />
                  <a href="/sign-in" className="sign-in">Sign In</a>                  
                </div>
                <div className='language'>
                  <GrLanguage className='lIcon' />
                  <select className="language-select">
                    <option value="en">EN</option>
                 
                </select>  
                </div>
           </div>

        </nav>
    );
}

export default Navbar;
