import React , { useContext} from 'react'
import { Link } from 'react-router-dom'
import '../../css/page404.css'
import {UserContext} from '../../App'


function Page404() {
  const {toggle , setToggle}  = useContext(UserContext)
  return (
    <div className={toggle}>
    <div className='page404BG'>
      <div>
      <img className='img404' src='https://assets.materialup.com/uploads/480d36a3-b732-494e-b92a-42c82e69a653/preview.jpg' alt='imgbg'/>
      <div className='position404'>
    <Link to="/"><button className='btn404'><i class="fa fa-home"></i>חזור לדף הבית</button></Link>  

      </div>
      </div>
    </div>
    </div>
  )
}

export default Page404