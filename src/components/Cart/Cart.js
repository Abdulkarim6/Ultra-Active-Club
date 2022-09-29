
import './Cart.css';
import author from '../../header-logo/author.jpg'
import { useState } from 'react';
const Cart = (props) => {
    const { loadCetagory } = props;
    let exerciseTime = 0;
    for (const cetagory of loadCetagory) {
        const time = exerciseTime + cetagory.time;
        exerciseTime = time;
    }
    /* ------------------------------------ */
    //  const [button, setButtons] = useState([])
    // const handleAddToBreakTime = () =>{
    //     const buttons = document.getElementsByClassName('breakTime');
    //     for(const button of buttons)
    //     button.addEventListener('click', function(){
    //         console.log('click');
    //     })
    // }
    /* ------------------------------------------------------------ */
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
            <div className='for-break'>
                <button type="button" className="badge rounded-pill btn btn-primary"> <span className='breakTime'>10</span>s</button>
                <button type="button" className="badge rounded-pill btn btn-primary"> <span className='breakTime'>20</span>s</button>
                <button type="button" className="badge rounded-pill btn btn-primary"> <span className='breakTime'>30</span>s</button>
                <button type="button" className="badge rounded-pill btn btn-primary"> <span className='breakTime'>40</span>s</button>
                <button type="button" className="badge rounded-pill btn btn-primary"> <span className='breakTime'>50</span>s</button>
            </div>

            <h4 className='details-txt'>Exercise Details</h4>
            <div className='details'>
                <h5>Exercise time : {exerciseTime} second  </h5>
                <h5>Break time : </h5>
            </div>
            <button type="button" class="btn btn-primary btn-activity">Activity Completed </button>
        </div>
    );
};

export default Cart;