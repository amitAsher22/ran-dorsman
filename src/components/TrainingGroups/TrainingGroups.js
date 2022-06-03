import React, { useState } from "react";
import "../../css/TrainingGroups.css";
import Lightbox from "fslightbox-react";

const TrainingGroups = () => {
  const [changeNum, setChangeNum] = useState(null);
  const [show, setShow] = useState(false);

  const showSlide = (num) => {
    setChangeNum(num);
    setShow(!show);
  };
  const styleImg = {
    display: "flex",
    // padding:"4px",
    width: "15vw",
    height: "10vw",
  };

  return (
    <div >
      <div>
        <h1 className="titleGroups">אימוני קבוצות</h1>
        <div className="groupBtn">
          <button className="fileBtn">Download our schedule</button>
          <button className="fileBtn">הורדת מערכת שבועית PDF</button>
          <button className="fileBtn">מערכת PDF מותאמת לנשים בהריון</button>
        </div>
      </div>
      {/* ////////////////// */}
      
        <div className="imagesGROUPS">
          <div className="divImgAboutUs">
            <img
              onClick={() => showSlide(1)}
              style={styleImg}
              src="https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Fd.jpg?v=1560731955748"
              alt="swamp"
            />
            <h2 className="titleMan">פונקציונלי</h2>
          </div>
          <div className="divImgAboutUs">
            <img
              onClick={() => showSlide(2)}
              style={styleImg}
              src="https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Ff.jpg?v=1560731959442"
              alt="swamp"
            />
            <h2 className="titleMan">כוח</h2>
          </div>
          <div className="divImgAboutUs">
            <img
              onClick={() => showSlide(3)}
              style={styleImg}
              src="https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Fe.jpg?v=1560731959643"
              alt="swamp"
            />
            <h2 className="titleMan">יוגה</h2>
          </div>
          <div className="divImgAboutUs">
            <img
              onClick={() => showSlide(4)}
              src="https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Fb.jpg?v=1560731962200"
              style={styleImg}
              alt="swamp"
            />
            <h2 className="titleMan">מתחיל ריצה</h2>
          </div>
          <div className="divImgAboutUs">
            <img
              onClick={() => showSlide(5)}
              src="https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Fa.jpg?v=1560731966020"
              style={styleImg}
              alt="swamp"
            />
            <h2 className="titleMan">פילאטיס</h2>
          </div>
          <div className="divImgAboutUs">
            <img
              onClick={() => showSlide(6)}
              src="https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Fa.jpg?v=1560731966020"
              style={styleImg}
              alt="swamp"
            />
            <h2 className="titleMan">ריצה</h2>
          </div>
          <div className="divImgAboutUs">
            <img
              onClick={() => showSlide(7)}
              src="https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Fd.jpg?v=1560731955748"
              style={styleImg}
              alt="swamp"
            />
            <h2 className="titleMan">איתי</h2>
          </div>

          <Lightbox
            toggler={show}
            slide={changeNum}
            sources={[
              "https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Fd.jpg?v=1560731955748",
              "https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Ff.jpg?v=1560731959442",
              "https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Fe.jpg?v=1560731959643",
              "https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Fb.jpg?v=1560731962200",
              "https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Fa.jpg?v=1560731966020",
              "https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Fa.jpg?v=1560731966020",
              "https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Fd.jpg?v=1560731955748",
            ]}
          />
        </div>
     
    </div>
  );
};

export default TrainingGroups;
