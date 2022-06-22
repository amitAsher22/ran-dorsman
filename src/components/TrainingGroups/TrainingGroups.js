import React, { useState, useContext, useEffect } from "react";
import "../../css/TrainingGroups.css";
import { UserContext } from "../../App";
import { request } from "graphql-request";

const TrainingGroups = () => {
  const { toggle, setToggle } = useContext(UserContext);
  const [changeNum, setChangeNum] = useState(null);
  const [show, setShow] = useState(false);
  const [numberId, setNumberId] = useState(0);
  const [oneGroup, setOneGroup] = useState({});
  const [train, setTrain] = useState(null);
  const [group, setGroup] = useState([
    {
      imageGroup:
        "https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?cs=srgb&dl=pexels-kampus-production-6111616.jpg&fm=jpg",
      text: "תרגול המשלב תרגילי פילאטיס מסורתיים בקצב ובעצימות גבוהים במטרה להתחמם ולהעלות את הדופק. קצב הנשימה עולה, האנרגיה העולה, בשיעור אנרגטי, תנועתי",
      title: "קארדיו פילאטיס",
      id: 0,
    },
    {
      imageGroup:
        "https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4498606.jpg&fm=jpg ",
      text: "נשלב עבודה על שרירי ליבה בדופק משתנה עם משקלים נמוכים וחזרות שיעור בר הוא שיעור דינאמי ואנרגטי ששואב השראה מבלט",
      title: "קארדיו פילאטיס",
      id: 1,
    },
    {
      imageGroup:
        'https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Fe.jpg?v=1560731959643"',
      text: "השיעור מבוסס על מגוון רחב של תרגילים בשילוב מוזיקה מהנה ואנרגיה גבוהה מתאים לכולם, כולל לנשים בהריון   ",
      title: "קארדיו פילאטיס",
      id: 2,
    },
  ]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { traininggroups } = await request(
        "https://api-us-west-2.graphcms.com/v2/cl4fkql1705br01xv4dcjdol1/master",
        `
        query MyQuery {
          traininggroups {
           titleBig
           buttonRight
           buttonLeft
           buttonMiddle
         }
       }
        
        
        
    `
      );

      setTrain(traininggroups);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    setOneGroup(group[numberId]);
  }, [numberId]);

  const specificCoache = (num) => {
    setNumberId(num);
    const oneCoach = group.find((element) => element.id === num);
    setOneGroup(oneCoach);
    setShow(true);
  };

  return (
    <div>
      {show ? (
        <div className="main22">
          <section className="top22">
            <i class="material-icons"></i>
            <i class="material-icons" onClick={() => setShow(!show)}>
              close
            </i>
          </section>

          <div className="slider-wrapper22">
            <section className="left22">
              <i
                class="material-icons"
                onClick={() =>
                  setNumberId((numberId) =>
                    numberId >= group.length - 1 ? 0 : numberId + 1
                  )
                }
              >
                arrow_back_ios
              </i>
              <img src={oneGroup.imageGroup} alt={oneGroup.title} />
              <i
                className="material-icons"
                onClick={() =>
                  setNumberId((numberId) =>
                    numberId <= group.length - 1 ? 0 : numberId - 1
                  )
                }
              >
                arrow_forward_ios
              </i>
            </section>
            <section className="right22" onClick={() => setShow(!show)}>
              <h2>{oneGroup.title}</h2>
              <p>{oneGroup.text}</p>
            </section>
          </div>
        </div>
      ) : (
        <div className={toggle}>
          <div className="backgroundGroup">
            <div>
              <p className="titleGroups">
                {train?.length ? train[0].titleBig : null}
              </p>
              <div className="groupBtn">
                <button className="fileBtn">
                  {train?.length ? train[0].buttonRight : null}
                </button>
                <button className="fileBtn">
                  {train?.length ? train[0].buttonMiddle : null}
                </button>
                <button className="fileBtn">
                  {train?.length ? train[0].buttonLeft : null}
                </button>
              </div>
            </div>
            {/* ////////////////// group images*/}

            <div className="groupImagesAll">
              {group.map((item, index) => (
                <div
                  data-aos="flip-left"
                  onClick={() => specificCoache(item.id)}
                  key={index}
                >
                  <img
                    src={item.imageGroup}
                    className="imgTraining"
                    alt={item.title}
                  />
                  <p className="titleGroupImg">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainingGroups;
