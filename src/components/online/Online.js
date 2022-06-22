import React, { useContext } from "react";
import "../../css/online.css";
import { UserContext } from "../../App";

function Online() {
  const { toggle, setToggle } = useContext(UserContext);
  return (
    <div className={toggle}>
      <div>
        <div className="mainOnline">
          <p className="titleOnline">מנוי חודשי או שנתי</p>
          <p className="pOnline">
            כל מנוי מתחיל מ-3 ימים ללא עלות. בחר את המנוי המתאים לך ביותר:)
          </p>
          <div className="divOnline">
            <div className="sectionOnline">
              <div>
                <img
                  className="imgOnline"
                  src="https://alpha.uscreencdn.com/images/offer/28899/big_11271_2Foffer_image_2FtagxC9XQcqgQc2G7WvVg_FRONT_20SUPPORT.jpg"
                  alt="month"
                />
              </div>
              <div className="priceOnline">
                <span>₪990.00</span>
                <span>שנה</span>
              </div>
              <div className="divYearOnline">
                <span className="yearOnline">מנוי שנתי</span>
                <p>קבל חודשיים חינם ברכישה של מנוי שנתי</p>
              </div>
              <div className="btnOnline">
                <button className="buttonOnline">התחל עכשיו</button>
              </div>
            </div>
            <div className="sectionOnline">
              <div>
                <img
                  className="imgOnline"
                  src="https://alpha.uscreencdn.com/images/offer/44014/big_11271_2Foffer_image_2FQENz6sLIQW2FKbfpI7RV_BULGARIEN_20SQUAT.jpg"
                  alt="year"
                />
              </div>
              <div className="priceOnline">
                <span>₪990.00</span>
                <span>חודשי מתחדש</span>
              </div>
              <div className="divYearOnline">
                <p className="yearOnline">מנוי חודשי</p>
                <p>חיוב חודשי קבוע של 99 ש"ח. ניתן להפסיק בכל שלב</p>
              </div>
              <div className="btnOnline">
                <button className="buttonOnline">התחל עכשיו</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Online;
