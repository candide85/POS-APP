import React from 'react';

import {images} from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='g_letter' />
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img' />
        <p className='p__opensans'>
          ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
          Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
           turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
        </p>
        <button type='button' className='custom__button' >Know More</button>
      </div>
      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt='about_knife' /> 
      </div>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img' />
        <p className='p__opensans'>ultricies, purus lectus malesuada libero, 
          sit amet commodo magna eros quis urna.
          Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
          Pellentesque habitant morbi tristique senectus et netus et malesuada 
          fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
        </p>
        <button type='button' className='custom__button' >Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
