import React, { useState } from "react";
import "../../css/TrainingGroups.css";


const TrainingGroups = () => {
  const [changeNum, setChangeNum] = useState(null);
  const [show, setShow] = useState(false);
  const [images , setImages] = useState([
    'https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Fd.jpg?v=1560731955748' 
   ,'https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Ff.jpg?v=1560731959442'
   ,'https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Fe.jpg?v=1560731959643'
   ,'https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Fb.jpg?v=1560731962200'
  ])


  return (
    <div className="backgroundGroup">
      <div>
        <h1 className="titleGroups">אימוני קבוצות</h1>
        <div className="groupBtn">
          <button className="fileBtn">Download our schedule</button>
          <button className="fileBtn">הורדת מערכת שבועית PDF</button>
          <button className="fileBtn">מערכת PDF מותאמת לנשים בהריון</button>
        </div>
      </div>
      {/* ////////////////// group images*/}
      
      <div className="groupImagesAll">
       <div> <img src="https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Fd.jpg?v=1560731955748" className="imgTraining" alt="img1"/> <p className="titleGroupImg">פונקציונלי</p></div>
       <div> <img src="https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Ff.jpg?v=1560731959442" className="imgTraining" alt="img2"/> <p className="titleGroupImg">פונקציונלי</p></div>
       <div> <img src="https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Ff.jpg?v=1560731959442" className="imgTraining" alt="img5"/> <p className="titleGroupImg">פונקציונלי</p></div>
       <div> <img src="https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Ff.jpg?v=1560731959442" className="imgTraining" alt="img5"/> <p className="titleGroupImg">פונקציונלי</p></div>
       <div> <img src="https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Ff.jpg?v=1560731959442" className="imgTraining" alt="img5"/> <p className="titleGroupImg">פונקציונלי</p></div>
 
       
      
      
      </div>
       
     
    </div>
  );
};

export default TrainingGroups;
