import React, { useContext } from "react";
import { UserContext } from "../../App";
import "../../css/person.css";
import { AiOutlineColumnHeight } from "react-icons/ai";
import { MdOutlinePeople } from "react-icons/md";
import { BsMenuButtonFill } from "react-icons/bs";
import { BsSmartwatch } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md";
import data from  './person.json';



function Person() {
  const { toggle, setToggle } = useContext(UserContext);
  return (
    <div className={toggle}>
      <div className="sectionOne">
        <div className="rightPerson">
          <h1 className="colorPersonT">
            אימון <span className="CTrain">כושר</span> אישי
          </h1>
          <p className="listP">
            <AiOutlineColumnHeight className="iconP" />
            מאמן כושר אישי
          </p>
          <p className="listP">
            <MdOutlinePeople className="iconP" />
            אימון אחד על אחד
          </p>
          <p className="listP">
            <BsMenuButtonFill className="iconP" />
            בניית תוכנית אימון אישית
          </p>
          <p className="listP">
            <BsSmartwatch className="iconP" />
            משך האימון: 50 דקות
          </p>
        </div>
        <div className="leftPerson">
          <div className="divTime">
            <p className="timeP">50</p>
            <p className="timeP">דקות</p>
          </div>
        </div>
      </div>

      <div className="sectionTwo">
        <div className="div1">
          <h1 className="tDiv1">אימון כושר אישי אחד על אחד</h1>
          <p className="colortextDiv1">תוכנית אימון אישית</p>
          <p className="colortextDiv1">אימון כושר אישי אחד על אחד עם מאמן פרטי. זו אולי הנוסחה</p>
          <p className="colortextDiv1">המנצחת ליצירת שיגרת אימונים ואורך חיים בריא</p>
          <div>
            <p className="colortextDiv1">
              אימון כושר אישי מתחיל קודם כל בבנית תוכנית אימון אישי. לצורך כך,
              לאחר שיחת
            </p>
            <p className="colortextDiv1">
              הכרות קצרה, ניפגש לאימון ניסיון (שהוא במחיר מוזל 🙂 ). באימון
              הראשון, נבין בדיוק את
            </p>
            <p className="colortextDiv1">
              המטרות והיעדים, ותוך כדי תרגול, נבנה תוכנית אישית המתאימה לרמת
              הכושר, למטרות
            </p>
            <p className="colortextDiv1">אנו מתבצעים אימון כושר אישי בבית הלקוח ובפארק הירקון בת"א .</p>
          </div>
          <ul>
            <li className="colortextDiv1">אימון TRX אישי</li>
            <li className="colortextDiv1">אימון ריצה</li>
            <li className="colortextDiv1">אימונים פונקציונלים ומשולבים</li>
            <li className="colortextDiv1">אימוני כוח בדופק גבוה</li>
          </ul>
          <div>
            <h2>יש להגיע עם:</h2>
            <ul>
              <li className="colorUl">מגבת</li>
              <li className="colorUl">בקבוק מיים</li>
              <li className="colorUl">אישור רפואי סטנדרטי</li>
            </ul>
          </div>
        </div>
        <div className="div2">
          <div>
            <h2>שעות פעילות</h2>
            <p className="listFont">
            <MdOutlineWatchLater className="clock1"/> ימי ראשון - חמישי
            </p>
            <ul >
              <li className="point1">12:00 – 6:00</li>
              <li className="point1">21:30 – 16:30</li>
            </ul>
            <p className="listFont">
            <MdOutlineWatchLater className="clock1"/> שישי בבוקר
            </p>
            <ul>
              <li className="point1">12:00 – 6:00</li>
            </ul>
            <p className="listFont">
            <MdOutlineWatchLater className="clock1"/> פארק הירקון
            </p>
            <ul>
              <li className="point1">תל אביב</li>
            </ul>
            <p className="listFont">
            <MdOutlineWatchLater className="clock1"/> בית הלקוח
            </p>
            <ul>
              <li className="point1">תל אביב</li>
            </ul>
            <div className="divBtnDiv1">
            <button className="btnDiv2">לתיאום אימון ניסיון</button>
            </div>
          </div>
        </div>
        <div className="div3">
          <h2>מאמן כושר</h2>
         <div><img className="imgPerson" src="https://fitness-tv.co.il/wp-content/uploads/2021/01/about5.jpg" alt="ran"/></div> 
         <p className="nameDiv3"> <strong  >רן דורסמן</strong></p>
         <p>מאמן כושר אישי</p>
        </div>
        <div className="div3">
          <h2>מאמן כושר</h2>
         <div><img className="imgPerson" src="https://fitness-tv.co.il/wp-content/uploads/2021/01/about5.jpg" alt="ran"/></div> 
         <p className="nameDiv3"> <strong  >אליק</strong></p>
         <p>מאמן כושר אישי</p>
        </div>
        
      </div>
    </div>
  );
}

export default Person;
