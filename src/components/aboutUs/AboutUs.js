import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../App";
import "../../css/aboutUs.css";
import data from "./aboutUs.json";
import { request } from "graphql-request";

function AboutUs() {
  const { toggle, setToggle } = useContext(UserContext);
  const [show, setShow] = useState(false);
  const [oneCoach, setoneCoach] = useState({});
  const [number, setNumber] = useState(0);
  const [products, setProducts] = useState(null);
  const [coaches, setCoaches] = useState([
    {
      imageCoach:
        "https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Fd.jpg?v=1560731955748",
      name: "רן דורסמן",
      text: "אורלי למדה הדרכת עיצוב וחיטוב בוינגייט לפני כעשור וכעת מסיימת לימודי הדרכת פילאטיס מזרן",
      id: 0,
    },
    {
      imageCoach:
        "https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Ff.jpg?v=1560731959442",

      name: "אליק",
      text: "שחקנית יוצרת ומחזאית. עוסקת בהוראה ובעלת תואר בבימוי והוראה מטעם סמינר הקיבוצים ",
      id: 1,
    },
    {
      imageCoach:
        "https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Fe.jpg?v=1560731959643",

      name: "עמית",
      text: "  התשוקה שלי היא תנועה וריקו בנוסף יש לי קליניקה לפדיקורפלקסולוגיה - טיפול פדיקור ",
      id: 2,
    },
    {
      imageCoach:
        "https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Fe.jpg?v=1560731959643",

      name: "דביר",
      text: "  התשוקה שלי היא תנועה וריקו בנוסף יש לי קליניקה לפדיקורפלקסולוגיה - טיפול פדיקור ",
      id: 3,
    },
    {
      imageCoach:
        "https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Fe.jpg?v=1560731959643",

      name: "נועה",
      text: "  התשוקה שלי היא תנועה וריקו בנוסף יש לי קליניקה לפדיקורפלקסולוגיה - טיפול פדיקור ",
      id: 4,
    },
    {
      imageCoach:
        "https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Fe.jpg?v=1560731959643",

      name: "דביר",
      text: "  התשוקה שלי היא תנועה וריקו בנוסף יש לי קליניקה לפדיקורפלקסולוגיה - טיפול פדיקור ",
      id: 5,
    },
    {
      imageCoach:
        "https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Fe.jpg?v=1560731959643",

      name: "עדי",
      text: "  התשוקה שלי היא תנועה וריקו בנוסף יש לי קליניקה לפדיקורפלקסולוגיה - טיפול פדיקור ",
      id: 6,
    },
    {
      imageCoach:
        "https://cdn.glitch.com/e4c45146-a1cb-43c3-86fe-35bf46516a43%2Fe.jpg?v=1560731959643",

      name: "שחר",
      text: "  התשוקה שלי היא תנועה וריקו בנוסף יש לי קליניקה לפדיקורפלקסולוגיה - טיפול פדיקור ",
      id: 7,
    },
  ]);

  useEffect(() => {
    setoneCoach(coaches[number]); //// 2
  }, [number]);

  const specificCoache = (num) => {
    setNumber(num);
    const oneCoach = coaches.find((element) => element.id === num);
    setoneCoach(oneCoach);
    setShow(true);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const { aboutuses } = await request(
        "https://api-us-west-2.graphcms.com/v2/cl4fkql1705br01xv4dcjdol1/master",
        `
        query MyQuery {
          aboutuses {
            mainTitle
            textUs
            titleCoach
            coachOne
          }
        }
        
        
    `
      );

      setProducts(aboutuses);
    };

    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div>
      <div className={toggle}>
        {show ? (
          <main className="main">
            <section className="top">
              <i class="material-icons"></i>
              <i class="material-icons" onClick={() => setShow(!show)}>
                close
              </i>
            </section>

            <div className="slider-wrapper">
              <section className="left">
                <i
                  class="material-icons"
                  onClick={() =>
                    setNumber((number) =>
                      number >= coaches.length - 1 ? 0 : number + 1
                    )
                  }
                >
                  arrow_back_ios
                </i>

                <img
                  className="imgOpen"
                  src={oneCoach.imageCoach}
                  alt={oneCoach.name}
                />

                <i
                  className="material-icons"
                  onClick={() =>
                    setNumber((number) =>
                      number <= 0 ? coaches.length - 1 : number - 1
                    )
                  }
                >
                  arrow_forward_ios
                </i>
              </section>
              <section className="right" onClick={() => setShow(!show)}>
                <h2>{oneCoach.name}</h2>
                <p>{oneCoach.text}</p>
              </section>
            </div>
          </main>
        ) : (
          <div className="positionAboutUs">
            <div className="bgAboutUs">
              <div className="paragrapAboutUs">
                <p className="WhoUs1">
                  {products?.length ? products[0].mainTitle : null}
                </p>
                <p className="Ptext">
                  {products?.length ? products[0].textUs : null}
                </p>
                <p className="titleTeam">
                  {products?.length ? products[0].titleCoach : null}{" "}
                </p>
              </div>
              <div className="divText">
                {coaches.map((coach, index) => (
                  <div onClick={() => specificCoache(coach.id)} key={index}>
                    <img
                      className="imgCoach"
                      src={coach.imageCoach}
                      alt={coach.name}
                      data-aos="flip-left"
                    />
                    <p className="nameOfCoach">{coach.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AboutUs;
