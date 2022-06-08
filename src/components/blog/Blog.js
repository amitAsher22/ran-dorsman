import React, { useState, useContext ,useEffect  } from "react";
import { UserContext } from "../../App";
import "../../css/blog.css";

function Blog() {
  const { toggle, setToggle } = useContext(UserContext);
  const [categoryBlog , setcategoryBlog] = useState("")
  const [blogs, setBlogs] = useState([
    {
      imgBlog:
        "https://fithouse.co.il/wp-content/uploads/2021/12/IMG_7177-scaled.jpg",
      titleblog: "מתכון לעצמאות- עראייס מפיתה מקמח מלא וסלמון/דג אחר טרי",
      author: "יובל כרמי, דיאטנית קלינית של קבוצת FIT | 24.04.2222",
      Categories:'השראה',
      id:1
    },
    {
      imgBlog:
        "https://fithouse.co.il/wp-content/uploads/2022/04/IMG_7241-scaled.jpg",
      titleblog: "מתכון לעצמאות- עראייס מפיתה מקמח מלא וסלמון/דג אחר טרי",
      author: "יובל כרמי, דיאטנית קלינית של קבוצת FIT | 24.04.2222",
      Categories:'אימונים',
      id:2
    },
    {
      imgBlog:
        "https://fithouse.co.il/wp-content/uploads/2021/12/WhatsApp-Image-2021-12-16-at-16.58.19.jpeg",
      titleblog: "מתכון לעצמאות- עראייס מפיתה מקמח מלא וסלמון/דג אחר טרי",
      author: "יובל כרמי, דיאטנית קלינית של קבוצת FIT | 24.04.2222",
      Categories:'פילאטיס',
      id:2
    },
    {
      imgBlog:
        "https://fithouse.co.il/wp-content/uploads/2020/06/donats.jpg",
      titleblog: "מתכון לעצמאות- עראייס מפיתה מקמח מלא וסלמון/דג אחר טרי",
      author: "יובל כרמי, דיאטנית קלינית של קבוצת FIT | 24.04.2222",
      Categories:'השראה',
      id:3
    },
    {
      imgBlog:
        "https://fithouse.co.il/wp-content/uploads/2020/06/salad3.jpg",
      titleblog: "מתכון לעצמאות- עראייס מפיתה מקמח מלא וסלמון/דג אחר טרי",
      author: "יובל כרמי, דיאטנית קלינית של קבוצת FIT | 24.04.2222",
      Categories:'קורסים',
      id:4
    },
    {
      imgBlog:
        "https://fithouse.co.il/wp-content/uploads/2021/11/WhatsApp-Image-2021-11-29-at-14.17.29.jpeg",
      titleblog: "מתכון לעצמאות- עראייס מפיתה מקמח מלא וסלמון/דג אחר טרי",
      author: "יובל כרמי, דיאטנית קלינית של קבוצת FIT | 24.04.2222",
      Categories:'אימונים',
      id:5
    },
    {
      imgBlog:
        "https://fithouse.co.il/wp-content/uploads/2020/06/tea-scaled.jpg",
      titleblog: "מתכון לעצמאות- עראייס מפיתה מקמח מלא וסלמון/דג אחר טרי",
      author: "יובל כרמי, דיאטנית קלינית של קבוצת FIT | 24.04.2222",
      Categories:'מאמיז',
      id:6
    },
    {
      imgBlog:
        "https://fithouse.co.il/wp-content/uploads/2020/06/tea-scaled.jpg",
      titleblog: "מתכון לעצמאות- עראייס מפיתה מקמח מלא וסלמון/דג אחר טרי",
      author: "יובל כרמי, דיאטנית קלינית של קבוצת FIT | 24.04.2222",
      Categories:'מאמיז',
      id:7
    },
  ]);

  useEffect(()=>{
    setcategoryBlog('אימונים')
  },[])

  return (
    <div className={toggle}>
      <h1 className="titleBlog">בלוג</h1>
      <div className="mainDivBlog">
        <section className="right22">
          <h2 className="fitBlog">THE FIT BLOG TOPICS</h2>
          <hr className="linebLOG" />
          <div className="divButtonBlog">
            <button className="btnBlog" onClick={()=> setcategoryBlog("השראה")}>השראה</button>
            <button className="btnBlog"  onClick={()=> setcategoryBlog("אימונים")}>אימונים</button>
            <button className="btnBlog" onClick={()=> setcategoryBlog("פילאטיס")}>פילאטיס</button>
            <button className="btnBlog" onClick={()=> setcategoryBlog("מאמיז")}>מאמיז</button>
            <button className="btnBlog" onClick={()=> setcategoryBlog("קורסים")}>קורסים</button>
          </div>
          <hr className="linebLOG" />
        </section>

           {/* {categoryBlog === "" ? setcategoryBlog(blog) : blog.Categories === categoryBlog} */}
        <section className="left1">
          {blogs.filter((blog) => (
           blog.Categories === categoryBlog
          )).map((val , key)=> (
            <div key={key} className="blogShow">
              <img className="imgBlog1" src={val.imgBlog} alt={key} />
              <p className="pBlog">{val.titleblog}</p>
              <p className="pBlog">{val.author}</p>
              <span className="readmore">קרא עוד..</span>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Blog;
