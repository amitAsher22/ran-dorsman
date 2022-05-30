import React , {useState ,useContext} from 'react'
import '../../css/navbar.css'
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import logo from '../../images/logo.png'
import { GiHamburgerMenu } from 'react-icons/gi';
import HamburgerNavBar from './HamburgerNavBar';
import {UserContext} from '../../App'
import {Link} from 'react-scroll'


function Navbar() {
  const [showHamburger , setshowHamburger] = useState(true)
  const {toggle , setToggle}  = useContext(UserContext)
 
  
 
  const showNavBar = ()=>{
    setshowHamburger(!showHamburger)
    setToggle('home1')
    
 
  }
  return (
    <div >
    {showHamburger ? <div >
      <ul className='banbarPosition'>
            <img src={logo} alt="logo" className='logoRan'/>
            <li className='page'>עלינו</li>
            <li className='page'>השיעורים</li>
            <li className='page'>מסלולים</li>
            <li className='page'>ילדים ונוער</li>
            <li className='page'>לארגונים</li>
            <li className='page'>קייטנת תנועה 7-9</li>
            <li className='page'>גלריה</li>
           <Link to='email' smooth={true} duration={2000}> <li className='page'>צרו קשר</li></Link>
            <div className='socialMedia'>
             <FaFacebookF/>
              <FaInstagram/>
            </div>
      </ul>
     
      <div className='hamburgarIcons'>
            <div >
                  <GiHamburgerMenu  onClick={()=> showNavBar()}/>
                      <FaInstagram/>
                    <FaFacebookF/>
            </div>
            <div>
                  <img src={logo} alt="logo" className='logoRan'/>
            </div>
      </div>
    </div> : <HamburgerNavBar setshowHamburger={setshowHamburger} showHamburger={showHamburger}/>}
    
    
    </div>
  )
}

export default Navbar