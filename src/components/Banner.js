import React, { useState } from 'react';
import {Link} from 'react-router-dom'

const Banner = () => {

    const[name, setName]= useState('hidden')
  
    setTimeout(() => {
        setName('banner')
    }, 5000);

  return (
  <div className={name} >
    <Link to={'/offer'}>OK</Link>
    <p>закажи сейчас</p>
  </div>)
};

export default Banner;
