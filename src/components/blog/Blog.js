import React, { useState, useContext ,useEffect   } from "react";
import { UserContext } from "../../App";
import "../../css/blog.css";
import data from './blog.json'
import { Link } from "react-router-dom";
import ButtonsBlogs from './ButtonsBlogs';






function Blog() {
  
  const [oneBlog , setOneBlog]= useState({})
  // const [categoryBlog , setcategoryBlog] = useState("")
  const { toggle, setToggle , categoryBlogss , setcategoryBlog} = useContext(UserContext);

  const [blogs, setBlogs] = useState([
    {
      imgBlog:
        "https://fithouse.co.il/wp-content/uploads/2021/12/IMG_7177-scaled.jpg",
      titleblog: "מתכון לעצמאות- עראייס מפיתה מקמח מלא וסלמון/דג אחר טרי",
      author: "יובל כרמי, דיאטנית קלינית של קבוצת FIT | 24.04.2222",
      text:"ההמלצה שלנו היא דווקא לנסות להכין כמה שיותר בבית ולהפחית מזונות מעובדים ע”י מציאת מתכונים זריזים וטעימים שעשירים בחלבון- והנה אחד מהם- טורטייה מקמח עדשים עם שווארמה שעשויה מטופו. עדשים וטופו הם חלק מקבוצת הקטניות. הקטניות הן קבוצת מזון שעשירה בפחמימות אך גם בחלבון. בחצי כוס של קטניות יש בממוצע כ-7 גרם חלבון בדומה לביצה. בנוסף, הן עשירות בסיבים תזונתיים, בויטמינים ומינרלים ולכן מומלץ לשלב בתפריט היומי כחלק מתפריט מאוזן גם אם לא בהכרח אתם צמחוניים או טבעוניים",
      Categories:'השראה',
      id:1
    },
    {
      imgBlog:
        "https://fithouse.co.il/wp-content/uploads/2022/04/IMG_7241-scaled.jpg",
      titleblog: "מתכון לעצמאות- עראייס מפיתה מקמח מלא וסלמון/דג אחר טרי",
      author: "יובל כרמי, דיאטנית קלינית של קבוצת FIT | 24.04.2222",
      Categories:'אימונים',
      text:' הצורך בחלבון צמחי הולך וגובר ותעשיית המזון מציעה מגוון רחב של תחליפים',
      id:2
    },
    {
      imgBlog:
        "https://fithouse.co.il/wp-content/uploads/2021/12/WhatsApp-Image-2021-12-16-at-16.58.19.jpeg",
      titleblog: "מתכון לעצמאות- עראייס מפיתה מקמח מלא וסלמון/דג אחר טרי",
      author: "יובל כרמי, דיאטנית קלינית של קבוצת FIT | 24.04.2222",
      text: "זקוק לתמיכה וחיזוק במהלך כל השנה ועל אחת כמה לקראת החורףכפי כשעולם החי והצומח מכ עם ירידת הטמפרטורות ושינויי מזג האוויר המערכת החיסונית שלנו הופכת פגיעה יותר ולעיתים גם מצב הרוח. מלבד אימונים אנו רוצות לתת לכן כמה עצות שאולי נשמעות מובנות מאל אך רובנו לא לוקחים אותן מספיק ברצינות" ,
      Categories:'פילאטיס',
      id:3
    },
    {
      imgBlog:
        "https://fithouse.co.il/wp-content/uploads/2020/06/donats.jpg",
      titleblog: "מתכון לעצמאות- עראייס מפיתה מקמח מלא וסלמון/דג אחר טרי",
      author: "יובל כרמי, דיאטנית קלינית של קבוצת FIT | 24.04.2222",
      text: "השתדלו להכניס ללו”ז עמוס כל דבר שעושה לכם טוב. בין אם זה לאפות, אל תוותרו על כך, זוהי חלק מההשקעה בבריאות",
      Categories:'השראה',
      id:4
    },
    {
      imgBlog:
        "https://fithouse.co.il/wp-content/uploads/2020/06/salad3.jpg",
      titleblog: "מתכון לעצמאות- עראייס מפיתה מקמח מלא וסלמון/דג אחר טרי",
      author: "יובל כרמי, דיאטנית קלינית של קבוצת FIT | 24.04.2222",
      text : "התרגילים הבאים יעזרו לכם לעבוד על שרירי הבטן, הישבן, הירכיים, חגורת הכתפיים והזרועות, ישפרו את שיווי המשקל שלכם, התנועתיות של עמוד השדרה",
      Categories:'קורסים',
      id:5
    },
    {
      imgBlog:
        "https://fithouse.co.il/wp-content/uploads/2021/11/WhatsApp-Image-2021-11-29-at-14.17.29.jpeg",
      titleblog: "מתכון לעצמאות- עראייס מפיתה מקמח מלא וסלמון/דג אחר טרי",
      author: "יובל כרמי, דיאטנית קלינית של קבוצת FIT | 24.04.2222",
      Categories:'אימונים',
      text: "מי שעבר את שלב ההתאהבות יודע, שבלי השקעה ותחזוק, מערכת יחסים עלולה להיות כואבת. בשל העובדה שריצה היא פעילות ספורטיבית",
      id:6
    },
    {
      imgBlog:
        "https://fithouse.co.il/wp-content/uploads/2020/06/tea-scaled.jpg",
      titleblog: "מתכון לעצמאות- עראייס מפיתה מקמח מלא וסלמון/דג אחר טרי",
      author: "יובל כרמי, דיאטנית קלינית של קבוצת FIT | 24.04.2222",
      text: "שיעורי Mommy’s מציעים הזדמנות נהדרת לצאת מהבית, יחד עם התינוק שלך, ולהגיע להתאמן אצלנו בפילאטיס סטודיו. שיעורי Mommy’s כוללים אימוני",
      Categories:'מאמיז',
      id:7
    },
    {
      imgBlog:
        "https://fithouse.co.il/wp-content/uploads/2020/06/tea-scaled.jpg",
      titleblog: "מתכון לעצמאות- עראייס מפיתה מקמח מלא וסלמון/דג אחר טרי",
      author: "יובל כרמי, דיאטנית קלינית של קבוצת FIT | 24.04.2222",
      text: "מועד הלידה יש להמתין תקופת משכב לידה של שישה עד שמונה שבועות, כאשר בסיומה יש לקבל אישור רופא/ת נשים שניתן לחזור לפעילות. לאחר",
      Categories:'מאמיז',
      id:8
    },
  ]);

  useEffect(()=>{
    setcategoryBlog(categoryBlogss)
  },[])

  console.log("categoryBlogss",categoryBlogss);

  const singleBlog = (idBlog)=> {
   const specificBlog = blogs.find((item)=> item.id === idBlog)
   setOneBlog(specificBlog);

  }

  return (
    <div className={toggle}>
      <h1 className="titleBlog">BLOG</h1>
      <div className="mainDivBlog">
        <section className="right22">
          <h2 className="fitBlog">THE FIT BLOG TOPICS</h2>
          <hr className="linebLOG" />
    
      <ButtonsBlogs/>
{/* 
          <div className="divButtonBlog">
            <button className="btnBlog" onClick={()=> setcategoryBlog("השראה")}>השראה</button>
            <button className="btnBlog"  onClick={()=> setcategoryBlog("אימונים")}>אימונים</button>
            <button className="btnBlog" onClick={()=> setcategoryBlog("פילאטיס")}>פילאטיס</button>
            <button className="btnBlog" onClick={()=> setcategoryBlog("מאמיז")}>מאמיז</button>
            <button className="btnBlog" onClick={()=> setcategoryBlog("קורסים")}>קורסים</button>
          </div> */}
         
         
    
          <hr className="linebLOG" />
        </section>

           {/* {categoryBlog === "" ? setcategoryBlog(blog) : blog.Categories === categoryBlog} */}
        <section className="left1">
          {blogs.filter((blog) => (
           blog.Categories === categoryBlogss
          )).map((val , key)=> (
            <div key={key} className="blogShow">
              <img className="imgBlog1" src={val.imgBlog} alt={key} />
              <p className="pBlog">{val.titleblog}</p>
              <p className="pBlog">{val.author}</p>
           <Link to={`/blog/${val.id}`}><span className="readmore" onClick={()=> singleBlog(val.id)}>קרא עוד..</span>  </Link> 
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Blog;
