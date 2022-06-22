import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import "../../css/video.css";

function Video() {
  const [play, setPlay] = useState(null);

  useEffect(() => {
    setPlay(true);
  }, [play]);

  return (
    <div className="videoPosition">
      <ReactPlayer
        width="90%"
        height="100%"
        // url="https://video.wixstatic.com/video/417376_206d9e980e70474380ba58cb7ed78e98/1080p/mp4/file.mp4"
        // url="https://cdn.videvo.net/videvo_files/video/premium/video0447/large_watermarked/25_075804227-steadicam-shot-run-picturesque_preview.mp4"
        url="https://cdn.veed.io/render/e79d055a-b4e2-4b0c-8534-af34cd0d5ed9.mp4#t=0.001"
        controls={play}
        playing={play}
        playsinline="true"
        autoplay="true"
        className="video"
      />
    </div>
  );
}

export default Video;
