import React, { useState, useEffect } from 'react';
import Image from "next/image";
import bgImg from '../images/Untitled_10.PNG';

import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Schedule = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    //runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="schedule-head">
        <h2>CLASS SCHEDULE</h2>
      </div>
      <div className="venmo">
      <p>Click below to sign up:</p>
      <a href="https://venmo.com/code?user_id=3535891821758008975&created=1674931269.830744&printed=1">
      <Image src={bgImg} width="350px" height="300px" className="image-float-right"/>
      </a>
      </div>
      <div className="schedule">
      <div>
        <h2 className='title'>Monday</h2>
        <p>Salsa Partnering Level 1 with Ricardo 7-8pm</p>
        <p>Bachata Partnering with Ricardo 8-9pm</p>
        <p>Salsa Partnering Level 2 with Ricardo 9-10pm</p>
        <br/>
        <h3 className='title'>Monday Prices</h3>
        <p>8-Week Session: $104</p>
        <p>5-Week Session: $70</p>
        <p>Drop-In: $15</p>
        <p>Practice: $5</p>
        <br/>
        <br/>

        <h2 className='title'>Wednesday</h2>
        <p>Salsa on2 Footwork with Juan Lopez 7-8pm</p>
        <p>Salsa on2 Partnerwork with Juan Lopez 8-9pm</p>
        <br/>
        <br/>
        <h3 className='title'>Wednesday Prices</h3>

        <p>Drop-In: $15</p>
        <p>Both Classes: $20</p>
        <br/>
        <p>jrca1821@gmail.com</p>
        <p>(857)348-8362</p>
      </div>
      </div>
    </div>
  )
}

export default Schedule

//<Image src={bgImg} width="350px" height="300px" className="image-float-right"/>
