import React from 'react'
import telefono from '../Images/ppig.webp'
import television from '../Images/cppl.webp'
import sasuke from '../Images/waffl.webp'
import naruto from '../Images/oreo.webp'   
import { CgShoppingBag } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { SlEye } from "react-icons/sl";





const Evade = (props) => {

  return (
    <div className='evade'>
        <div className='taxes'>
            <img src= {props.image}/>

            <div className='p-icons'>
              <span>
                <CgShoppingBag />
              </span>
              <span>
                <CiHeart />
              </span>
              <span>
                <SlEye />
              </span>
            </div>
            <h4>{props.words}</h4>
            <h2>{props.number}</h2>
        </div>

    </div>
  )
}

export default Evade

