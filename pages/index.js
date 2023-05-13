import React from 'react';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';
//    <FooterBanner footerBanner={bannerData && bannerData[0]} />


const Home = ({ products, bannerData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
    <div className="products-heading">
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;

/*import React, { useState, useEffect } from 'react';
import Image from "next/image";
import bgImg from '../images/Untitled_10.PNG';

import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

print('ji');
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
      <Image src={bgImg} width="350px" height="300px" className="image-float-right"/>
      </div>
      <div className="schedule">
      <div>
        <h2 className='title'>Monday</h2>
        <p>Bachata Partnering with Ricardo 7-8pm</p>
        <p>Salsa Partnering with Ricardo 8-9pm</p>
        <p>Practice 9-10pm</p>
        <br/>
        <h3 className='title'>Prices</h3>
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
        <h3 className='title'>Prices</h3>

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

export default Schedule*/

