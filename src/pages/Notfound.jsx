import React from 'react'
import image from '../assets/error.png';
import '../css/notfound.css';

export const Notfound =()=> {
  return (
    <div >
      <img src={image} alt="error404" className='center' />
    </div>
    
  )
}

