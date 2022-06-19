import React from "react";
import "../../css/SectionThreeImages.css";
import img4 from "../../images/img4.jpg";
import img3 from "../../images/img3.jpg";

function SectionThreeImages() {
  return (
    <div>
      <div className="gridImagesThree">
        <img
          className="bg1Three"
          width={250}
          height={150}
          src={img4}
          alt="img1"
        />
        <div className="bg3Three3">
          <div className="bg3Div">
            <h2 className="title-section-two">מגוון מסלולים </h2>
            <div>
              <p className="p">מגוון מסלולים שיאפשר לכם/ן</p>
              <p className="p">להצטרף אלינו, לקהילה</p>
              <p className="p">מדהימה נעה ונהנת :)</p>
            </div>
            <div>
              <ul className="pointUl">
                <li>הטוב ביותר שלך עם עצמך. מגוון</li>
                <li>שיעורים, מפונקציונאלי דרך יוגה,</li>
                <li>ריקוד, פילאטיס כולל מכשירים</li>
              </ul>
            </div>
            <div>
              <p>לכל אחד לכל אחת נמצא את</p>
              <p>הדרך המתאימה לשלב</p>
              <p>תנועה בחיים בצורה אפשרית</p>
              <p>ומיטיבה</p>
            </div>
            <div className="btnSectionTwo">
              <button className="btnSctionTwo">שיעור ניסיון</button>
              <button className="btnSctionTwo">מידע על המסלולים</button>
            </div>
          </div>
        </div>
        <img
          className="bg2Three"
          width={250}
          height={350}
          src={img3}
          alt="img2"
        />
      </div>
    </div>
  );
}

export default SectionThreeImages;
