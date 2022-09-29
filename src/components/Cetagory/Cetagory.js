import React from 'react';
import './Cetagory.css'
const Cetagory = (props) => {
    // console.log(props);
            const {dataAddToCart, cetagory} = props;
            const {picture, name, time} = cetagory;
            return (
            <div className='cetagory'>
                <img src={picture} alt="" />
                <h4> {name} </h4>
                <p> {time} S</p>
                <button onClick={() => dataAddToCart(cetagory)} type="button" className="btn btn-primary">add to list</button>
            </div>
            )
};

export default Cetagory;