
import React , { useState , useEffect } from 'react'
import { LngLatBounds } from 'react-map-gl';
import '../../css/aboutUs.css'
// import FsLightbox from 'fslightbox-react';
// import Lightbox from "fslightbox-react";
// import Slide from '../Slide';






function AboutUs() {

  const [show, setShow] = useState(false);
  const [oneCoach, setoneCoach] = useState({});
  const [number, setNumber] = useState(0);
  const [disable, setdisable] = useState(false);
 
 
  const [coaches, setCoaches] = useState([
    {
      imageCoach: "https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Fd.jpg?v=1560731955748",
      name: "רן דורסמן",
      text: "אורלי למדה הדרכת עיצוב וחיטוב בוינגייט לפני כעשור וכעת מסיימת לימודי הדרכת פילאטיס מזרן",
      id: 0,
    },
    {
      imageCoach: "https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Ff.jpg?v=1560731959442",
       

      name: "אליק",
      text: "שחקנית יוצרת ומחזאית. עוסקת בהוראה ובעלת תואר בבימוי והוראה מטעם סמינר הקיבוצים ",
      id: 1,
    },
    {
      imageCoach: "https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Fe.jpg?v=1560731959643",
       
      name: "עמית",
      text: "  התשוקה שלי היא תנועה וריקו בנוסף יש לי קליניקה לפדיקורפלקסולוגיה - טיפול פדיקור ",
      id: 2,
    },
  ]);
  

  useEffect(()=>{
    
    setoneCoach(coaches[number]) //// 2

  },[number])

  const specificCoache = (num) => {
    setNumber(num);
    const oneCoach = coaches.find((element) => element.id === num); /// {id , img , text}
    setoneCoach(oneCoach);
    setShow(true);
    // setdisable(oneCoach.id === coaches[coaches.length - 1].id || oneCoach.id ===  0 ? true : false)
  };

  return (
    <div>
      {show ? (
        <main className="main">
          <section className="top">
            <button>↔</button>
            <button onClick={() => setShow(!show)}>❌</button>
          </section>

          <div className="slider-wrapper">
            <section className="left">
              <button
                onClick={() => 
                  setNumber(number => number >= coaches.length -1 ? 0 : number + 1 )
                  // setoneCoach(coaches[number])
                 
                  // oneCoach.id === coaches[coaches.length -1] ? console.log('work') : console.log('no work')
       
                }
           
              >
                ⬅
              </button>
              <img src={oneCoach.imageCoach} alt={oneCoach.name} />
              
               <button
                  onClick={() => 
                    setNumber(number => number <= 0 ? coaches.length - 1 : number - 1 )
                  

                  }
                 
                >
                  ➡
                </button>
               
             
            </section>
            <section className="right">
              <h2>{oneCoach.name}</h2>
              <p>{oneCoach.text}</p>
            </section>
          </div>
        </main>
      ) : (
        <div className="containerImages">
          <div className="paragrapAboutUs">
            <h1 className="WhoUs">מי אנחנו</h1>
            <p className="Ptext">
              שיעור בר הוא שיעור דינאמי ואנרגטי ששואב השראה מבלט, פילאטיס ועבודה
              אירובית ואפילו מתבצעו בחלקו מול בר בלט משלב אלמנטים של כוחף. נשלב
              עבודה על שרירי ליבה בדופק משתנה עם משקלים נמוכים שיעור בר הוא
              שיעור דינאמי ואנרגטי ששואב השראה מבלט, פילאטיס ועבודה אירובית
              ואפילו מתבצעו וגמישות ועובר בין כל קבוצות השרירים בגובחלק משלב
              אלמנטים של כוח וגמישות ועובר בין כל קבוצות השרירים בגוף. 
              מול בר בלט נשלב עבודה על שרירי ליבה בדופק משתנה עם משקלים נמוכים
            </p>
            <h1 className="titleTeam">הצוות והמורים</h1>
          </div>
          {coaches.map((coach, index) => (
            <div onClick={() => specificCoache(coach.id)} key={index}>
              <img className="imgCoach" src={coach.imageCoach} alt={coach.name}/>
              <p>{coach.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AboutUs