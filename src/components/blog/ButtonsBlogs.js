import React, { useContext } from "react";
import data from "./blog.json";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "../../css/blog.css";

function ButtonsBlogs() {
  const { toggle, setToggle, categoryBlogss, setcategoryBlog } =
    useContext(UserContext);
  return (
    <div className={toggle}>
      <div className="divButtonBlog">
        <button className="btnBlog" onClick={() => setcategoryBlog("השראה")}>
          <Link className="linkStyle1" to={"/Blog"}>
            השראה
          </Link>
        </button>
        <button className="btnBlog" onClick={() => setcategoryBlog("אימונים")}>
          <Link className="linkStyle1" to={"/Blog"}>
            אימונים
          </Link>
        </button>
        <button className="btnBlog" onClick={() => setcategoryBlog("פילאטיס")}>
          <Link className="linkStyle1" to={"/Blog"}>
            פילאטיס
          </Link>
        </button>
        <button className="btnBlog" onClick={() => setcategoryBlog("מאמיז")}>
          <Link className="linkStyle1" to={"/Blog"}>
            מאמיז
          </Link>
        </button>
        <button className="btnBlog" onClick={() => setcategoryBlog("קורסים")}>
          <Link className="linkStyle1" to={"/Blog"}>
            קורסים
          </Link>
        </button>
      </div>
    </div>
  );
}

export default ButtonsBlogs;
