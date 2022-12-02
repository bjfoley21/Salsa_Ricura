import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>Salsa Ricura @ The Dance Complex (Studio 2),</p>
      <p>536 Massachusetts Ave. Cambridge, MA 02139</p>
      <a href='https://www.instagram.com/salsa_ricura/'>
      <p className="icons">
        <AiFillInstagram />
      </p>
      </a>
    </div>
  )
}

export default Footer