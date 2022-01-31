import React, { useState } from 'react';
import galaxy5 from '../images/Galaxy-A5.jpg'
import galaxy7 from '../images/galaxy-7.png'
import samsung from '../images/samsung.png'

const InfoPage = () => {

  const images = [galaxy7, galaxy5, samsung]
  const[img, setImg] = useState(0)

  const changeImgNext = () => {
    let i = img
    i += 1
    if(i === images.length){
      i = 0
    }
    setImg(i)
  }

  const changeImgPrev = () => {
    let i = img
    i -= 1
    if(i < 0){
      i = images.length-1
    }
    setImg(i)
  }

  return (
    <div className='slider'>
      <div className='slider__img'>
        <img src={images[img]} alt='slide'/>
      </div>
      <div className='slider__btn'>
        <button onClick={changeImgPrev}>prev</button>
        <button onClick={changeImgNext}>next</button>
      </div>
    </div>
  )
};

export default InfoPage;
