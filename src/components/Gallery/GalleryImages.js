import React from 'react'
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'
import SimpleImageSlider from "react-simple-image-slider";



function GalleryImages() {
  return (
  <div style={{display:"flex" , justifyContent:'center', alignItems:'center' }}>
    <SimpleImageSlider
    width={400}
    height={400}
    images={[img1,img2,img3]}
    showBullets={true}
    showNavs={true}
    // style={{ objectFit:'cover'}}
  />
  </div>

    
  )
}

export default GalleryImages