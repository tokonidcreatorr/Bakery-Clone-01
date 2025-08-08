import React from 'react'
import Image1 from '../Images/innit.webp'
import Image2 from '../Images/coffee.webp'
import Image3 from '../Images/breaktru.webp'
import { IoArrowBack } from "react-icons/io5";
import { IoArrowForwardOutline } from "react-icons/io5";



const Nato = () => {
  return (
    <div className='nato'>
        <div className='backicons'>
          <IoArrowBack/>
      </div>
      <div className='natos'>
          <img src={Image2}/>
          <img src={Image3}/>
          <img src={Image1}/>
      </div>
      <div className='icons'>
            <IoArrowForwardOutline/>
      </div>

    </div>
  )
}

export default Nato
