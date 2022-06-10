import React from 'react'
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'
import SimpleImageSlider from "react-simple-image-slider";
import '../../css/GalleryImages.css'
import data from './gallery.json'

console.log(data);



function GalleryImages() {

  return (
  <div  style={{display:"flex" , justifyContent:'center' , backgroundSize:'contain' }}>
    <SimpleImageSlider
    width={450}
    height={"90%"}
    images={[img1 ,img2 , img3]}
    showBullets={true}
    showNavs="true"
    style={{backgroundRepeat:'no-repeat' , backgroundSize:'contain'} }
  />
  </div>

    
  )
}

export default GalleryImages