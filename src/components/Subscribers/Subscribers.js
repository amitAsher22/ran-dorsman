import React from 'react'
import '../../css/Subscribers.css'

 const Subscribers = () => {
  return (
    <div className='positionSubscribers'>
      <div className='Route'>
        <p>מנוי שנתי בסיס</p>
        <p><strong>240 ש"ח לחודש</strong></p>
        <p>עד 4 שיעורי סטודיו בחודש*</p>
      </div>
      <div className='Route'>
        <p>מנוי שנתי מורחב</p>
        <p><strong>350 ש"ח לחודש</strong></p>
        <p>עד 10 שיעורי סטודיו בחודש*</p>
      </div>
      <div className='Route'>
        <p>מנוי שנתי פרימיום</p>
        <p><strong>450 ש"ח לחודש</strong></p>
        <p>עד 14 שיעורי סטודיו בחודש*</p>
      </div>
      <div className='RouteImg' >
     <img className='imgSub' src="https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Fa.jpg?v=1560731966020" alt="someimg"/>
      </div>
    </div>
  )
}

export default Subscribers