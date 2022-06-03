import React ,{useState} from 'react'
import '../../css/Subscribers.css'



 const Subscribers = () => {
 

  return (
    <div className='backgrounsSub'>
    <h1 className="titleGroups">מנויים</h1>
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
     
      <div  className='Route'>
         <p>מנוי שנתי פרימיום</p>
        <p><strong>450 ש"ח לחודש</strong></p>
        <p>עד 14 שיעורי סטודיו בחודש*</p>
        </div>

      <div className='RouteImg' >
      <img className='imgSub' src="https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Fa.jpg?v=1560731966020" alt="someimg"/>
      </div>

     
    
    </div>

      {/* <Popup 
       modal
      nested
      trigger={ <img className='imgSub' src="https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Fa.jpg?v=1560731966020" alt="someimg"/>
      }>
       {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Modal Title </div>
        <div className="content">
          
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
          Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
          delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
          commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
          explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
        </div>
        <div className="actions">
          
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            close modal
          </button>
        </div>
      </div>
    )}
      </Popup> */}



    </div>
  )
}

export default Subscribers