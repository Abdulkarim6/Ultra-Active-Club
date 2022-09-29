
import './Cart.css';
import author from '../../header-logo/author.jpg'
import { useState } from 'react';
const Cart = (props) => {
    const { loadCetagorys } = props;
    let exerciseTime = 0;
    for (const cetagory of loadCetagorys) {
        const time = exerciseTime + cetagory.time;
        exerciseTime = time;
    }

    const [breakTime, breakTimes] = useState(0)
    const handleAddToBreakTime = (time) => {
        breakTimes(time);
        let breakTimeSecond;

        // get breakTimeSecond
        const storeSecond = localStorage.getItem('breakTime');
        if (storeSecond) {
            breakTimeSecond = JSON.parse(storeSecond);
        }
        else {
            breakTimeSecond = {};
        }

        //  add quantity
        const quantity = breakTimeSecond[time];
        if (quantity) {
            const newQuantity = quantity + 1;
            breakTimeSecond[time] = newQuantity;
        }
        else {
            breakTimeSecond[time] = 1;
        }
        localStorage.setItem('breakTime', JSON.stringify(breakTimeSecond));

    }

    return (
        <div className='cart'>
            <div className='author-info'>
                <div className='author'>
                    <img src={author} alt="" />
                    <h4>Abdul Karim</h4>
                </div>
                <h5>Junior Web Developer</h5>
            </div>

            <h4>Add A Break</h4>
            <div className='for-break '>
                <button onClick={() => { handleAddToBreakTime(10) }} type="button" className="clk-btn badge rounded-pill btn btn-primary">10 s</button>
                <button onClick={() => { handleAddToBreakTime(20) }} type="button" className="clk-btn badge rounded-pill btn btn-primary">20 s</button>
                <button onClick={() => { handleAddToBreakTime(30) }} type="button" className="clk-btn badge rounded-pill btn btn-primary">30 s</button>
                <button onClick={() => { handleAddToBreakTime(40) }} type="button" className="clk-btn badge rounded-pill btn btn-primary">40 s</button>
                <button onClick={() => { handleAddToBreakTime(50) }} type="button" className="clk-btn badge rounded-pill btn btn-primary">50 s</button>
            </div>

            <h4 className='details-txt'>Exercise Details</h4>
            <div className='details'>
                <h5>Exercise time : {exerciseTime} second  </h5>
                <h5>Break time : {breakTime} </h5>
            </div>
            <button type="button" className="btn btn-primary btn-activity">Activity Completed </button>
        </div>
    );
};

export default Cart;