import React, { useState } from 'react'
import Images from '../Images/logo.webp'
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Image1 from '../Images/menu-removebg-preview.png'
import Image2 from '../Images/close-removebg-preview.png'
import { IoMdMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";




const Mainheader = () => {
  let menu = document.getElementById('list')
  let open = document.getElementById('open-icon');
  let close = document.getElementById('close-icon')

  const data = [12, 'bag', 'house' ]
  console.log(data)

  function openMenu(){
    menu.style.display = 'flex';
    open.style.display = 'none';
    close.style.display = 'block'
}

function closeMenu(){
    menu.style.display = 'none';
    open.style.display = 'block';
    close.style.display = 'none'
}

const [click, setClick] = useState(true)

function handleclick(){
  setClick(!click)
}

  return (
    <div className='everything'>
      <img src= {Images}/>
      <ul className={click ? 'heading' : 'active'}>
        
            <Link to='/'><p> Home</p></Link>
            <Link to='/about'><p> About</p></Link>
            <Link to='/pages'><p> Pages</p></Link>
            <Link to='/shop'><p> Shop</p></Link>
            <Link to='/contact'><p> Contact</p></Link>
        
      </ul>

      <div className='m-i'>
          {
            click ?
            (<IoMdMenu alt="" id="open-icon" onclick="openMenu()" class="menu" onClick={handleclick}/>)
            : (<IoIosClose alt="" id="close-icon" onclick="closeMenu()" class="close" onClick={handleclick}/>  
            )
          }
        </div>

      <div className='icon'>

        
       
        <span>
          <IoSearchOutline />
        </span>
        <span>
          <FaRegHeart />
        </span>
        <span>
          <IoBagHandleOutline />
        </span>

      </div>
     </div>

    
  )
}

export default Mainheader
