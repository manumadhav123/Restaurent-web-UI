import React from 'react';
import { SubHeading } from '../../components';
import{ images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's World" />
      <h1 className='headtext__cormorant'>What We Belive In</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.when an unknown </p>
        </div>
        <p className='p__opensans'>  printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but 
          also the leap into electronic typesetting, remaining essentially unchanged</p>
      </div>
      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
