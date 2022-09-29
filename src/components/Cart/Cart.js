import React from 'react';
import './Cart.css';
import author from '../../header-logo/author.jpg'
const Cart = (props) => {
    const { loadCetagory } = props;
    let exerciseTime = 0;
    for (const cetagory of loadCetagory) {
        const time = exerciseTime + cetagory.time;
        exerciseTime = time;
    }
    return (
        <div className='cart'>
            <h2> calculate body</h2>
            <div className='author-info'>
                <div className='author'>
                    <img src={author} alt="" />
                    <h4>Abdul Karim</h4>
                </div>
                <h5>Junior Developer</h5>
            </div>
            <h4>Add A Break</h4>
            <div className='for-break'>
                <button type="button" className="btn btn-primary">10 s</button>
            </div>
            <h4 className='details-txt'>Exercise Details</h4>
            <div className='details'>
                <h5>Exercise time : {exerciseTime} s  </h5>
                <h5>Break time</h5>
            </div>
        </div>
    );
};

export default Cart;