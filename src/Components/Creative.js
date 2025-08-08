import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";



const Creative = (props) => {
  return (
    <div className='relay'>
         <div className='locate'>
                <p>CONTACT US</p>
                <p>if you have any questions. please <br/>contact us at <a href='mailto:demo@example.com'>demo@example.com</a></p>
        <div className='location'>
                <CiLocationOn  className='brutus'/>
                <p>Your address goes here. 123, <br/> Adress.</p>
        </div>
            <div className='phone'>
                <IoIosPhonePortrait />
                <p className='burger'>
                + 0 123 456 789
                </p>
                <p>+ 0 123 456 789</p>
            </div>

        </div>
        <div className='account'>
            <p> ACCOUNT</p>
            <p>My account</p>
            <p>My orders</p>
            <p>Returns</p>
            <p>Shipping</p>
            <p>Wishlist</p>
            <p>How does it work?</p>
            <p>Merchant Sign up</p>
        </div>
        <div className='newsletter'>
            <p> If you have any questions please <br/>contact us at <span>Send us a Email</span></p>
        </div>
       
       


    </div>

  )
}

export default Creative
