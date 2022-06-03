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
      url="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      controls={play}
      playing={play}
      />
       
    </div>
  )
}

export default Video