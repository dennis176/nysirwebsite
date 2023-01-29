import React from 'react'
import "../home/home.scss"
import FrontAbout from './frontAbout/FrontAbout'
import VideoSec from "./videosec/VideoSec"
import Slider from "./slider/Slider"



const Home = () => {


  return (
    <main className='home'>
       <FrontAbout/>
       <VideoSec/>
       <Slider/>
    </main>
  )
}

export default Home