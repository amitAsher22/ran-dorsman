import React from 'react'
import '../../css/SectionTwoImages.css'
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'

function SectionTwoImages() {
  return (
    
      <div className='gridImages'>
        <img className='bg1'width={250} height={250} src={img1} alt="img1"/>
        <div className='bgTwo'>
        <div className='bg3'>
          <div >
          <h2> מגוון רחב של שיעורים וסגנונות</h2>
          <p>אנחנו מזמינים אותך למצוא את</p>
          <p>התנועה שמיטיבה איתך,</p>
          <p>שמרפאת אותך, שמובילה לחיבור</p>
          <p>הטוב ביותר שלך עם עצמך. מגוון</p>
          <p>שיעורים, מפונקציונאלי דרך יוגה,</p>
          <p>ריקוד, פילאטיס כולל מכשירים</p>
          <p>ועוד! 21 מאמנים/ות ומורים/ות</p>
          <p>שבאו לתת את הלב והנשמה -כל</p>
          <p>אלו יתמכו בך בדרך התנועה.</p>
          <div className='btnSectionTwo'>
            <button className='btnSctionTwo'>מערכת שעות</button>
            <button className='btnSctionTwo'>השיעורים שלנו</button>
          </div>
          </div>
        </div>
        </div>
        <img   className='bg2'width={250} height={250} src={img2} alt="img2"/>
      </div>

    
    
  )
}

export default SectionTwoImages