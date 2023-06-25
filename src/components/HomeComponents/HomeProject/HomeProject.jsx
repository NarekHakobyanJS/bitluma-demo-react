import React from 'react'
import "./HomeProject.css"
import ReactPlayer from 'react-player'

const HomeProject = () => {
  return (
    <div className='home-project'>
        <h1>Projects</h1>
        <p className='home-project-p'>JOIN THE REVOLUTIONARY TECHNOLOGY</p>
        <div className='home-project-video-block'>
          <div className='home-project-video'>
          <ReactPlayer url="https://youtu.be/NuuUOHl3L_4" width={900}/>
          </div>
        </div>
    </div>
  )
}

export default HomeProject