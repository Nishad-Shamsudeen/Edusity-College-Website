import React, { useRef } from 'react'
import './VideoPlayer.css'
import colllege from '../../assets/College.mp4'
function VideoPlayer({playVedio,setVideo}) {

    const player=useRef(null);

    const closePlayer=(e)=>{
        
        if(e.target === player.current){
            setVideo(false)
        }

    }
    

  return (
    <div class ={`vedio-palyer ${playVedio ? '':'hide'}`} ref={player} onClick={closePlayer}>
        <video src={colllege} autoPlay muted controls></video>
      
    </div>
  )
}

export default VideoPlayer
