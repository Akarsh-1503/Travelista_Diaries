import React, {useState} from 'react';
import {questions} from './Question';
import Myaccordian from './Myaccordian';
import './style.css';

const Accordian = () =>{
const [data,setData] = useState(questions);
return(
    
    <>
    <section className="main-div">
    <h1>Frequently Asked Questions</h1>
    {
        data.map((currel) => {
            return <Myaccordian key ={currel.id} {...currel}/>
        })
    }
    </section>
    </>
);

};

export default Accordian;