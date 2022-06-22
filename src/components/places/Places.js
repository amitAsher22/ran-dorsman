import React, { useContext, useEffect, useState } from "react";
import { AiOutlineSchedule } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import "../../css/places.css";
import { UserContext } from "../../App";
import { request } from "graphql-request";

function Places() {
  const { toggle, setToggle } = useContext(UserContext);
  const [place, setPlace] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const { placess } = await request(
        "https://api-us-west-2.graphcms.com/v2/cl4fkql1705br01xv4dcjdol1/master",
        `
        query MyQuery {
          placess {
            cardOneTitle
            cardOneTitleMiddle
            carOneTitleTree
            cardMiddleOneTitle
            cardMiddleTwoTitle
            cardTreeMiddleTitle
            cardLeftMainTitle
            cardLeftTitleSecond
            cardLeftTitleTree
            titleBig
          }
        }
        
        
    `
      );

      setPlace(placess);
    };

    fetchProducts();
  }, []);

  return (
    <div className={toggle}>
      <div className="BackgroundPlaces">
        <p className="titleGroups">
          {place?.length ? place[0].titleBig : null}
        </p>
        <div className="sectionPlaces">
          <div className="cardPlaces">
            <h2>{place?.length ? place[0].cardOneTitle : null}</h2>
            <hr />
            <div className="middle">
              <GoLocation className="location" />{" "}
              <span>{place?.length ? place[0].cardOneTitleMiddle : null}</span>
            </div>
            <div className="middle">
              <AiOutlineSchedule className="location" />
              <span>א - ה 8:00-22:00 </span> <span>יום ו 8:00-15:00</span>
            </div>
          </div>
          <div className="cardPlaces2">
            <h2>{place?.length ? place[0].cardMiddleOneTitle : null}</h2>
            <hr />
            <div className="middle">
              {" "}
              <GoLocation className="location2" />{" "}
              <span>{place?.length ? place[0].cardMiddleTwoTitle : null}</span>
            </div>
            <div className="middle">
              <AiOutlineSchedule className="location2" />
              <span>א - ה 8:00-22:00 </span> <span>יום ו 8:00-15:00</span>
            </div>
          </div>
          <div className="cardPlaces">
            <h2>{place?.length ? place[0].cardLeftMainTitle : null}</h2>
            <hr />
            <div className="middle">
              <GoLocation className="location" />{" "}
              <span>{place?.length ? place[0].cardLeftTitleSecond : null}</span>
            </div>
            <div className="middle">
              <AiOutlineSchedule className="location" />
              <span>א - ה 8:00-22:00 </span> <span>יום ו 8:00-15:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Places;
