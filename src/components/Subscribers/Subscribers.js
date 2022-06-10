import React, { useContext } from "react";
import "../../css/Subscribers.css";
import { UserContext } from "../../App";
import data from './subscribers.json'



const Subscribers = () => {
  const { toggle, setToggle } = useContext(UserContext);

  return (
    <div className={toggle}>
      <div className="testpos">
        <div className="backgrounsSub">
          <h1 className="titleGroups">מנויים</h1>
          <div className="positionSubscribers">
            <div className="Route">
              <p>מנוי שנתי בסיס</p>
              <p className="strong1">
                <strong>240 ש"ח לחודש</strong>
              </p>
              <p>עד 4 שיעורי סטודיו בחודש*</p>
            </div>
            <div className="Route">
              <p>מנוי שנתי מורחב</p>
              <p className="strong1">
                <strong>350 ש"ח לחודש</strong>
              </p>
              <p>עד 10 שיעורי סטודיו בחודש*</p>
            </div>

            <div className="Route">
              <p>מנוי שנתי פרימיום</p>
              <p>
                <strong>450 ש"ח לחודש</strong>
              </p>
              <p>עד 14 שיעורי סטודיו בחודש*</p>
            </div>

            <div className="RouteImg">
              <img
                className="imgSub"
                src="https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Fa.jpg?v=1560731966020"
                alt="someimg"
              />
            </div>
          </div>

          <div>
            <p className="pSub">
              ניתן לשדרג כל אחד ממנויי הסטודיו למנוי משולב עם פילאטיס מכשירים: 4
              שיעורים בתוספת של 270 ש"ח בחודש
            </p>
          </div>
          <div className="positionSubscribers">
            <div className="Route2">
              <img
                className="imgSub"
                src="https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Fa.jpg?v=1560731966020"
              />
            </div>
            <div className="Route3">
              <p>מנוי שנתי בסיס</p>
              <p className="strong1">
                <strong>240 ש"ח לחודש</strong>
              </p>
              <p>עד 4 שיעורי סטודיו בחודש*</p>
            </div>

            <div className="Route3">
              <p>מנוי שנתי בסיס</p>
              <p className="strong1">
                <strong>240 ש"ח לחודש</strong>
              </p>
              <p>עד 4 שיעורי סטודיו בחודש*</p>
            </div>
          </div>
          <div className="btnSubscribers">
            <button className="fileBtn1">הרשמה לאימון ניסיון</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribers;
