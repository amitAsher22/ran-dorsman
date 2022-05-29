import React , {useState ,useContext} from 'react'
import Video from '../components/pageHome/Video'
import SectionOneText from '../components/pageHome/SectionOneText'
import SectionTwoImages from '../components/pageHome/SectionTwoImages'
import SectionThreeImages from '../components/pageHome/SectionThreeImages'
import SectionFourImages from '../components/pageHome/SectionFourImages'
import SectionFiveImages from '../components/pageHome/SectionFiveImages'
import Email from '../components/pageHome/Email'
import {UserContext} from '.././App'

function Home() {
  const {toggle , setToggle}  = useContext(UserContext)

  return (
    <div className={toggle}>
      <Video/>
      <SectionOneText/>
      <SectionTwoImages/>
      <SectionThreeImages/>
      <SectionFourImages/>
      <SectionFiveImages/>
      <Email/>
    </div>
  )
}

export default Home