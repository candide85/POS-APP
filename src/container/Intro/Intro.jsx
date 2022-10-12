import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs'
import {meal} from '../../constants'
import './Intro.css';

const Intro = () => {
  const [playVideo, setplayVideo] = useState(false)
  const vidRef = useRef()

  const handleVideo = () => {
    setplayVideo((prePlayVideo) => !prePlayVideo);

    if (playVideo) {
      vidRef.current.pause()
    }else{
      vidRef.current.play()
    }
  }

  return(
      <div className='app__video'>
        <video src={meal} controls={false} type='video/mp4' loop muted ref={vidRef} />
        <div className='app__video-overlay flex__center'>
          <div className='app__video-overlay_circle flex__center' onClick={handleVideo}>
            {playVideo ? <BsPauseFill color='#fff' fontSize={30} /> : <BsFillPlayFill color='#fff' fontSize={30} />}
          </div>
        </div>
      </div>
    )
  };

export default Intro;
