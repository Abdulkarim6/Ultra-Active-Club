import React from 'react';
import './Header.css'
import img from '../../header-logo/header-logo.jpg'
const Header = () => {
    return (
        <div className='header'>
            <div className='title'>
                <img src={img} alt="" />
                <h2>Gym Fitness Club</h2>
            </div>
        </div>
    );
};

export default Header;