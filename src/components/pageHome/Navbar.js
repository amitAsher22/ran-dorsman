import React from 'react'
import '../../css/navbar.css'
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

function Navbar() {
  return (
    <div className='size'>
        <ul className='banbarPosition'>
            <li className='page'>עלינו</li>
            <li className='page'>השיעורים</li>
            <li className='page'>מסלולים</li>
            <li className='page'>ילדים ונוער</li>
            <li className='page'>לארגונים</li>
            <li className='page'>קייטנת תנועה 7-9</li>
            <li className='page'>גלריה</li>
            <li className='page'>צרו קשר</li>
            <div className='socialMedia'>
             <FaFacebookF/>
              <FaInstagram/>
            </div>
      </ul>
    
    </div>
  )
}

export default Navbar