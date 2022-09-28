import React from 'react';
import Cart from '../Cart/Cart';
import Fake from '../fakedb/Fake';
import Header from '../header/Header';
import './Contain.css'

const Contain = () => {
    return (
        <div className='contain'>
            <div className="work-out">
                <div>
                  <Header></Header>
                </div>
                <div>
                  <Fake></Fake>
                </div>
            </div>
            <div className="calculation">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Contain;