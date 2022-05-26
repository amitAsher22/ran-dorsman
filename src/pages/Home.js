import React from 'react'
import Video from '../components/pageHome/Video'
import SectionOneText from '../components/pageHome/SectionOneText'
import SectionTwoImages from '../components/pageHome/SectionTwoImages'
import SectionThreeImages from '../components/pageHome/SectionThreeImages'
import SectionFourImages from '../components/pageHome/SectionFourImages'
import SectionFiveImages from '../components/pageHome/SectionFiveImages'
import Email from '../components/pageHome/Email'

function Home() {
  return (
    <div>
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