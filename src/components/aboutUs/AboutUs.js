import React , { useState  } from 'react'
import '../../css/aboutUs.css'
// import FsLightbox from 'fslightbox-react';
import Lightbox from "fslightbox-react";





function AboutUs() {
const [changeNum , setChangeNum] = useState(null)
const [show , setShow] = useState(false)
const showSlide = (num)=>{

  setChangeNum(num)
  setShow(!show)
  }
  const styleImg = {
    display: "flex",
    padding:"0.5rem",
    width: "16vw",
    height: "10vw"
  };

  return (
    <div className='bgAboutUs'>
   <div className='paragrapAboutUs'>
      <h1 className='WhoUs'>מי אנחנו</h1>
      <p className='Ptext'>שיעור בר הוא שיעור דינאמי ואנרגטי ששואב השראה מבלט, פילאטיס ועבודה אירובית ואפילו מתבצעו 
      בחלקו מול בר בלט 
משלב אלמנטים של כוחף. 
נשלב עבודה על שרירי ליבה בדופק משתנה עם משקלים נמוכים שיעור בר הוא שיעור דינאמי ואנרגטי ששואב השראה מבלט, פילאטיס ועבודה אירובית ואפילו מתבצעו  וגמישות ועובר בין כל קבוצות השרירים בגובחלק משלב אלמנטים של כוח וגמישות ועובר בין כל קבוצות השרירים בגוף. <p>
</p>ו מול בר בלט 
נשלב עבודה על שרירי ליבה בדופק משתנה עם משקלים נמוכים </p>
   </div>
     <h1 className='titleTeam'>הצוות והמורים</h1>
     <div style={{
          display: "flex",    
          flexWrap: "wrap",
          justifyContent: "center",
          // padding: "5vw",
        }}>
        <div className='divImgAboutUs'>
     <img
          onClick={() => showSlide(1)}
          style={styleImg}
          src="https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Fd.jpg?v=1560731955748"
          alt="swamp"
        />
         <h2 className='titleMan'>רן</h2>
        </div>
        <div className='divImgAboutUs'>
       
          <img
          onClick={() => showSlide(2)}
          style={styleImg}
          src="https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Ff.jpg?v=1560731959442"
          alt="swamp"
        />
         <h2 className='titleMan'>אליק</h2>
        </div>
      <div className='divImgAboutUs'>
     
           <img
          onClick={() => showSlide(3)}
          style={styleImg}
          src="https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Fe.jpg?v=1560731959643"
          alt="swamp"
        />
         <h2 className='titleMan'>עמית</h2>
      </div>
      <div className='divImgAboutUs'>
      
           <img
          onClick={() => showSlide(4)}
          src="https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Fb.jpg?v=1560731962200"
          style={styleImg}
          alt="swamp"
        />
        <h2 className='titleMan'>רותם</h2>
      </div>
      <div className='divImgAboutUs'>
      
         <img
          onClick={() => showSlide(5)}
          src="https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Fa.jpg?v=1560731966020"
          style={styleImg}
          alt="swamp"
        />
        <h2 className='titleMan'>איתי</h2>
      </div>
      <div className='divImgAboutUs'>
      
      <img
       onClick={() => showSlide(6)}
       src="https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Fa.jpg?v=1560731966020"
       style={styleImg}
       alt="swamp"
     />
     <h2 className='titleMan'>איתי</h2>
   </div>
   <div className='divImgAboutUs'>
      
      <img
       onClick={() => showSlide(7)}
       src="https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Fd.jpg?v=1560731955748"
       style={styleImg}
       alt="swamp"
     />
     <h2 className='titleMan'>איתי</h2>
   </div>
      
     
         <Lightbox  
         toggler={show}  
         slide={changeNum}
         sources={ [
                    'https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Fd.jpg?v=1560731955748',
                    'https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Ff.jpg?v=1560731959442',
                    'https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Fe.jpg?v=1560731959643',
                    'https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Fb.jpg?v=1560731962200',
                    'https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Fa.jpg?v=1560731966020',
                    "https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Fa.jpg?v=1560731966020",
                    "https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Fd.jpg?v=1560731955748",
                    
               
                ] }
         />
      
        
      
     </div>
  
    </div>
  )
}

export default AboutUs