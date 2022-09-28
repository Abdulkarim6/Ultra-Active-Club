import React from 'react';
import Fake from '../fakedb/Fake';
import Header from '../header/Header';
import './Contain.css'

const Contain = () => {
    return (
        <div className='contain'>
            <div className="work-out">
                <h2> work-out body</h2>
                <div>
                  <Header></Header>
                </div>
                <div>
                  <Fake></Fake>
                </div>
            </div>
            <div className="calculation">
                <h2>calculation body </h2>
            </div>
        </div>
    );
};

export default Contain;