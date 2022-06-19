import React, { useContext } from "react";
import { AiOutlineSchedule } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import "../../css/places.css";
import { UserContext } from "../../App";
import data from "./places.json";

function Places() {
  const { toggle, setToggle } = useContext(UserContext);
  return (
    <div className={toggle}>
      <div className="BackgroundPlaces">
        <p className="titleGroups">סניפים</p>
        <div className="sectionPlaces">
          <div className="cardPlaces">
            <h2>תל אביב</h2>
            <hr />
            <div className="middle">
              {" "}
              <GoLocation className="location" /> <span>נווה אביבים</span>
            </div>
            <div className="middle">
              <AiOutlineSchedule className="location" />{" "}
              <span>א - ה 8:00-22:00 </span> <span>יום ו 8:00-15:00</span>
            </div>
          </div>
          <div className="cardPlaces2">
            <h2>הוד השרון</h2>
            <hr />
            <div className="middle">
              {" "}
              <GoLocation className="location2" /> <span>מתחם 1200</span>
            </div>
            <div className="middle">
              <AiOutlineSchedule className="location2" />{" "}
              <span>א - ה 8:00-22:00 </span> <span>יום ו 8:00-15:00</span>
            </div>
          </div>
          <div className="cardPlaces">
            <h2>הרצליה</h2>
            <hr />
            <div className="middle">
              {" "}
              <GoLocation className="location" /> <span>גליל ים החדשה</span>
            </div>
            <div className="middle">
              <AiOutlineSchedule className="location" />{" "}
              <span>א - ה 8:00-22:00 </span> <span>יום ו 8:00-15:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Places;
