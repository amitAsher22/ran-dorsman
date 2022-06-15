import React, { useContext , useEffect , useState } from "react";
import "../../css/Subscribers.css";
import { UserContext } from "../../App";
import data from './subscribers.json'
import { request } from 'graphql-request';



const Subscribers = () => {
  const { toggle, setToggle } = useContext(UserContext);
  const [mainData , setMainData] = useState(data)

  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {

      const { subscribers  } = await request(
        'https://api-us-west-2.graphcms.com/v2/cl4fkql1705br01xv4dcjdol1/master',
        `
        query{
          subscribers {
            titlepage
            backgroundimage {
              url
             
            }
            price
            subscriptionMonthly
            lessonMount
            imageLeft{
              url
            }
            titleBetweenCards
            titleOneMiddleCard
            titleTwoCard
            titleTreeCard
            titleCardLeftCard
            cardTitleLeft
            titleTreeCardLeftLine
          }
        }
        
        
        
    `
      );
     
      setProducts(subscribers);
    };
    
    fetchProducts();
  }, []);
  
  console.log(products);
 

  return (
    <div className={toggle}>
      <div className="testpos">
        <div className="backgrounsSub">
          <h1 className="titleGroups">{products?.length ? products[0].titlepage : null}</h1>
          <div className="positionSubscribers">
            <div className="Route" >
              <p>{ products?.length ? products[0].subscriptionMonthly : null}</p>
              <p >
                <strong>{products?.length ? products[0].price : null}</strong>
              </p>
              <p>{products?.length ? products[0].lessonMount : null}</p>
            </div>
            <div className="Route">
              <p>{mainData[3].title1}</p>
              <p >
                <strong>{mainData[3].title2}</strong>
              </p>
              <p>{mainData[3].title3}</p>
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
                src={products?.length ? products[0].backgroundimage.url : null}
                alt="someimg"
              />
            </div>
          </div>

          <div>
            <p className="pSub">
            {products?.length ? products[0].titleBetweenCards : null}
            </p>
          </div>
          <div className="positionSubscribers">
            <div className="Route2">
              <img
                className="imgSub"
                src={products?.length ? products[0].imageLeft.url : null}
              />
            </div>
            <div className="Route3">
              <p> {products?.length ? products[0].titleOneMiddleCard : null}</p>
              <p className="strong1">
                <strong>{products?.length ? products[0].titleTwoCard : null}</strong>
              </p>
              <p>{products?.length ? products[0].titleTreeCard : null}</p>
            </div>

            <div className="Route3">
              <p>{products?.length ? products[0].titleCardLeftCard : null}</p>
              <p className="strong1">
                <strong>{products?.length ? products[0].cardTitleLeft : null}</strong>
              </p>
              <p>{products?.length ? products[0].titleTreeCardLeftLine : null}</p>
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
