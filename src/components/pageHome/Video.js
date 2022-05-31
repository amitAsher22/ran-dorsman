import React , {useEffect , useState} from 'react'
import ReactPlayer from 'react-player'
import '../../css/video.css'


function Video() {
  const [play , setPlay] = useState(null)

  useEffect(()=>{
    setPlay(true)
  },[play])

  return (
    <div className='videoPosition'>
      <ReactPlayer
       width="100%"
       height="700px"  
      url="https://www.youtube.com/watch?v=7sDY4m8KNLc"
      controls={play}
      playing={play}
      />
       
    </div>
  )
}

export default Video