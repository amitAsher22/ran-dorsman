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
       width="50%"
       height="600px"  
      url="https://video.wixstatic.com/video/417376_206d9e980e70474380ba58cb7ed78e98/1080p/mp4/file.mp4"
      controls={play}
      playing={play}
      />
       
    </div>
  )
}

export default Video