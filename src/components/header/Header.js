import React from 'react';
import './Header.css'
import img from '../../header-logo/header-logo.jpg'
const Header = () => {
    return (
        <div className='header'>
            <img src={img} alt="" />
            <h2>Gym Fitness Club</h2>
        </div>
    );
};

export default Header;