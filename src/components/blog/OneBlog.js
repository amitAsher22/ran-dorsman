import React , {useState ,useEffect , useContext}  from 'react'
import {useParams}  from "react-router-dom";
import data from "./blog.json"
import '../../css/oneblog.css'
import { Link } from "react-router-dom";
import ButtonsBlogs from './ButtonsBlogs';
import { UserContext } from "../../App";

function OneBlog() {

  const { id } = useParams();
  const [blogData , setBlogData] = useState({})
  const { toggle, setToggle , categoryBlogss , setcategoryBlog} = useContext(UserContext);

  useEffect(()=>{
    const product = data.find(item=> item.id === id) 
    setBlogData(product);

  },[])

 
 
  return (
    <div className={toggle}>
    <div className="mainDivBlog">
      <section className="right22">
          <h2 className="fitBlog">THE FIT BLOG TOPICS</h2>
          <hr className="linebLOG" />
    <ButtonsBlogs/>
          {/* <div className="divButtonBlog">
          <button className="btnBlog" >השראה</button>
            <button className="btnBlog" >אימונים</button>
            <button className="btnBlog" >פילאטיס</button>
            <button className="btnBlog" >מאמיז</button>
            <button className="btnBlog" >קורסים</button>
          </div> */}
          <hr className="linebLOG" />
        </section>
        <div className='blogMain'>
      <h1 className='titleblogOne'>{blogData.titleblog}</h1>
      <img className='blogImgOne' src={blogData.imgBlog}  alt="img"/>
      <p className='textBlogOne'>{blogData.text}</p>
        </div>
   
     
    </div>
    </div>
  )
}

export default OneBlog