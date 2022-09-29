import React, { useEffect, useState } from 'react';
import Blog from '../../blog/Blog';
import Cart from '../Cart/Cart';
import Cetagory from '../Cetagory/Cetagory';
import Header from '../header/Header';
import './Contain.css'

const Contain = () => {

    const [cetagories, setCetagories] = useState([]);
    useEffect(() => {
        fetch('Data.json')
            .then(res => res.json())
            .then(data => setCetagories(data))
    }, []);

    const [cart, setCart] = useState([]);

    const dataAddToCart = (cetagory) => {
        const newCart = [...cart, cetagory]
        setCart(newCart);
    }

    return (
        <div className='contain'>
            <div className="work-out">
                <div>
                    <Header></Header>
                </div>

                <div className='cetagories'>
                    {
                        cetagories.map(cetagory => <Cetagory
                            cetagory={cetagory}
                            key={cetagory.id}
                            dataAddToCart={dataAddToCart}
                        ></Cetagory>)
                    }
                </div>

                <div className='blog-contain'>
                   <Blog></Blog>
                </div>
            </div>
            <div className="calculation">
                <Cart loadCetagory={cart}></Cart>
            </div>
        </div>
    );
};

export default Contain;