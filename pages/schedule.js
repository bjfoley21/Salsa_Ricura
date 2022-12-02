import React, { useState, useEffect } from 'react';
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
      <div className="schedule">
          <h2>Monday</h2>
          <p>Bachata Partnering 7-8pm</p>
          <p>Salsa Partnering 8-9pm</p>
          <p>Practice 9-10pm</p>
          <br/>
          <h2>Wednesday</h2>
          <p>Bachata Footwork 7-8pm</p>
          <p>Salsa Footwork 8-9pm</p>
          <br/>
          <br/>
          <br/>
          <h3>Prices</h3>
          <p>5-Week Session: $70</p>
          <p>Drop-In: $15</p>
          <p>Practice: $5</p>
          <br/>

          <p>jrca1821@gmail.com</p>
          <p>(857)348-8362</p>
      </div>
    </div>
  )
}

export default Schedule