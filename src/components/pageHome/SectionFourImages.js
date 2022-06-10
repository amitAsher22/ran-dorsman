import React from 'react'
import '../../css/SectionFourImages.css'
import img5 from '../../images/img5.jpg'
import data from './SectionFourImages.json'


function SectionFourImages() {
  return (
    <div>
    <div>
    <div className='gridImagesFour'>
      <img className='bg1Four'width={250} height={150} src={img5} alt="img1"/>
      <div className='bg3Four'>
      <div className='bg3DivFour'>
          <h2> חברות וארגונים</h2>
          <p className='p'>חצי יום של תנועה, שחרור</p>
          <p className='p'>והנאה לצוותים וארגונים בNUA.</p>
          <p className='p'>חווית ריטריט באמצע היום -</p>
          <p className='p'>ניתוק לטובת חיבור מחדש, של</p>
          <p className='p'>כל אחד לעצמו, לאחרים ולרגע</p>
          <p className='p'>כאן ועכשיו.</p>
  
          <div className='btnSectionTwo'>
            <button className='btnSctionTwo'> מידע נוסף</button>
          </div>
          </div>
      </div>
      {/* <img   className='bg2Four'width={250} height={350} src={img3} alt="img2"/> */}
    </div>
  </div>
  </div>
  )
}

export default SectionFourImages