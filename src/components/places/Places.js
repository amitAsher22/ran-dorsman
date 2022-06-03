import React from 'react'
import { AiOutlineSchedule } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import '../../css/places.css'

function Places() {
  return (
    <div>
      <h1 className="titleGroups">סניפים</h1>
    <div className='sectionPlaces'>
      <div className='cardPlaces'>
       <h3>תל אביב</h3>
       <hr/>
      <div> <GoLocation/> <span>נווה אביבים</span></div>
      <div><AiOutlineSchedule/> <span>א - ה8:00-22:00  </span> <span>יום ו8:00-15:00</span></div>  
      </div>
      <div className='cardPlaces'>
       <h3>הוד השרון</h3>
       <hr/>
       <div> <GoLocation/> <span>מתחם 1200</span></div>
      <div><AiOutlineSchedule/> <span>א - ה8:00-22:00  </span> <span>יום ו8:00-15:00</span></div> 
      </div>
      <div className='cardPlaces'>
       <h3>הרצליה</h3>
       <hr/>
       <div> <GoLocation/> <span>גליל ים החדשה</span></div>
      <div><AiOutlineSchedule/> <span>א - ה8:00-22:00  </span> <span>יום ו8:00-15:00</span></div> 
      </div>
    </div>
    </div>
  )
}

export default Places