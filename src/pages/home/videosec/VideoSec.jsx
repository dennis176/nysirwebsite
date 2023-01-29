import React from 'react'
import pyrovideo from "../../../img/pyroklip.mp4"
import "../videosec/videosec.scss"

const VideoSec = () => {
  return (
    <section className='videosec'>
        <div className='videooverlay'></div>
        <video autoPlay muted loop loading="lazy">
            <source src={pyrovideo} type="video/mp4"/>
        </video>
    </section>
  )
}

export default VideoSec