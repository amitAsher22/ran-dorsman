import React from 'react'
import '../../css/SectionFiveImages.css'
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'


function SectionFiveImages() {
  return (
    <div>
        <div className='gridImages'>
        <img className='bg1Five'width={250} height={250} src={img1} alt="img1"/>
        <div className='bgdivFive'>
          <div className='bg3divFive'>
          <h2> ילדים ונוער ב NUA</h2>
          <div>
            <ul>
              <li> 2-5 קונטקידס (תנועה לוהורים וילדים) גילאי </li>
              <li>היפהופ מט"ח ועד ה' (חלוקה גילאית) </li>
              <li>סדנאות ליווי התפתחותי</li>
            </ul>
          </div>
        
          </div>
        </div>
        <img   className='bg2Five'width={250} height={250} src={img2} alt="img2"/>
      </div>
    </div>
  )
}

export default SectionFiveImages