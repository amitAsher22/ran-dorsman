import React from 'react'
import data from './blog.json'
import { Link } from 'react-router-dom'

function ButtonsBlogs() {
  return (
   
        <div className="divButtonBlog">
          <button className="btnBlog" ><Link to={"/Blog/:5"}>השראה</Link></button>
            <button className="btnBlog" ><Link>אימונים</Link></button>
            <button className="btnBlog" ><Link>פילאטיס</Link></button>
            <button className="btnBlog" ><Link>מאמיז</Link></button>
            <button className="btnBlog" ><Link>קורסים</Link></button>
          </div>
   
  )
}

export default ButtonsBlogs