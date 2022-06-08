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
       height="500px"  
      url="https://www.youtube.com/watch?v=-X4ikwUwxoE"
      controls={play}
      playing={play}
      playsinline={true}
      autoplay
      
      />
       
    </div>
  )
}

export default Video