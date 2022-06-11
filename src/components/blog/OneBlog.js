import React , {useState ,useEffect }  from 'react'
import {useParams}  from "react-router-dom";
import data from "./blog.json"
// import { Link } from 'react-router-dom';

function OneBlog() {
  const { id } = useParams();
  console.log('id',typeof(id));
  console.log('parse', parseInt(id))


 
  const [blogData , setBlogData] = useState({})

  useEffect(()=>{
    const product = data.find(item=> item.id === id) ///////// {id , img ,text }
    setBlogData(product);

  },[])

  
  return (
    <div>
      <img src={blogData.imgBlog} width={"100px"} height={"100px"} alt="img"/>
      <h1>{blogData.titleblog}</h1>
      <p>{blogData.text}</p>
   
     
    </div>
  )
}

export default OneBlog