import React  from 'react'
import {useParams}  from "react-router-dom";

function OneBlog() {
  let { id } = useParams();
 


  return (
    <div>OneBlog {id}</div>
  )
}

export default OneBlog