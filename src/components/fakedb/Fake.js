import React, { useEffect, useState } from 'react';
import './Fake.css'

const Fake = () => {

    const [cetagories, setCetagories] = useState([])
    // console.log(cetagories);
    useEffect(() => {
        fetch('Data.json')
            .then(res => res.json())
            .then(data => setCetagories(data))
    }, [])

    return (
        <div>
            {
                cetagories.map(cetagory => <Cetagory
                     cetagory={cetagory}
                     key={cetagory.id}
                     ></Cetagory>)
            }

        </div>
    );
};

const Cetagory = (props) => {
    // console.log(props.cetagory);
    const {picture, name, time} = props.cetagory;
    // console.log(picture, name, time);
    return (
        <div className='cetagory'>
            <img src={picture} alt="" />
            <h4> {name} </h4>
            <p> {time} S</p>
        </div>
    )
}

export default Fake;