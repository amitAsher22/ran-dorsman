import React from "react";
import "../../css/SectionTwoImages.css";
import img22 from "../../images/img22.jpg";
import img1 from "../../images/img1.jpg";

function SectionTwoImages() {
  return (
    <div className="gridImages">
      <img className="bg1" width={170} height={250} src={img1} alt="img1" />
      <div className="bgTwo">
        <div className="bg3">
          <div>
            <h2 className="title-section-two">מגוון רחב של שיעורים וסגנונות</h2>
            <p className="p">אנחנו מזמינים אותך למצוא את</p>
            <p className="p">התנועה שמיטיבה איתך,</p>
            <p className="p">שמרפאת אותך, שמובילה לחיבור</p>
            <p className="p">הטוב ביותר שלך עם עצמך. מגוון</p>
            <p className="p">שיעורים, מפונקציונאלי דרך יוגה,</p>
            <p className="p">ריקוד, פילאטיס כולל מכשירים</p>
            <p className="p">ועוד! 21 מאמנים/ות ומורים/ות</p>
            <p className="p">שבאו לתת את הלב והנשמה -כל</p>
            <p className="p">אלו יתמכו בך בדרך התנועה.</p>
            <div className="btnSectionTwo">
              <button className="btnSctionTwo">מערכת שעות</button>
              <button className="btnSctionTwo">השיעורים שלנו</button>
            </div>
          </div>
        </div>
      </div>
      <img className="bg2" width={170} height={250} src={img22} alt="img2" />
    </div>
  );
}

export default SectionTwoImages;
