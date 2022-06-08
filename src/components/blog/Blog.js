import React , {useContext}from 'react'
import {UserContext} from '../../App'
import '../../css/blog.css'

function Blog() {
  const {toggle , setToggle}  = useContext(UserContext)
  return (
    <div className={toggle}>
        <h1 className='titleBlog'>בלוג</h1>
      <div className='mainDivBlog'>
        <section className='right'>
          <h2 className='fitBlog'>THE FIT BLOG TOPICS</h2>
          <hr className='linebLOG'/>
          <div className='divButtonBlog'>
            <button className='btnBlog'>השראה</button>
            <button className='btnBlog'>אימונים</button>
            <button className='btnBlog'>פילאטיס</button>
            <button className='btnBlog'>מאמיז</button>
            <button className='btnBlog'>קורסים</button>
          </div>
          <hr className='linebLOG'/>
        </section>
        <section className='left1'>
          <div className='blogShow'>
            <img className='imgBlog1' src='https://fithouse.co.il/wp-content/uploads/2021/12/IMG_7177-scaled.jpg' alt='img1'/>
            <p>מתכון לעצמאות- עראייס מפיתה מקמח מלא וסלמון/דג אחר טרי</p>
            <p>יובל כרמי, דיאטנית קלינית של קבוצת FIT | 24.04.2222</p>
            <span>קרא עוד..</span>
          </div>
          <div className='blogShow'>
            <img className='imgBlog1' src='https://fithouse.co.il/wp-content/uploads/2022/04/IMG_7241-scaled.jpg' alt='img2'/>
            <p>מתכון לעצמאות- עראייס מפיתה מקמח מלא וסלמון/דג אחר טרי</p>
            <p>יובל כרמי, דיאטנית קלינית של קבוצת FIT | 24.04.2222</p>
            <span>קרא עוד..</span>
          </div>
          <div className='blogShow'>
            <img className='imgBlog1' src='https://fithouse.co.il/wp-content/uploads/2021/12/WhatsApp-Image-2021-12-16-at-16.58.19.jpeg' alt='img3'/>
            <p>מתכון לעצמאות- עראייס מפיתה מקמח מלא וסלמון/דג אחר טרי</p>
            <p>יובל כרמי, דיאטנית קלינית של קבוצת FIT | 24.04.2222</p>
            <span>קרא עוד..</span>
          </div>
          <div className='blogShow'>
            <img className='imgBlog1' src='https://fithouse.co.il/wp-content/uploads/2021/11/WhatsApp-Image-2021-11-29-at-14.17.29.jpeg' alt='img3'/>
            <p>מתכון לעצמאות- עראייס מפיתה מקמח מלא וסלמון/דג אחר טרי</p>
            <p>יובל כרמי, דיאטנית קלינית של קבוצת FIT | 24.04.2222</p>
            <span>קרא עוד..</span>
          </div>
        
        </section>
      </div>
    </div>
  )
}

export default Blog