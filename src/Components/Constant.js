import React from 'react'
import Image1 from '../Images/breadcrumbs-bg.webp'
import { IoIosSearch } from "react-icons/io";
import Squeal from './Squeal';
import Creative from './Creative';



const Constant = () => {
  return (
    <div className='breadcrumbs'>
        <img src= {Image1}/>
        <div className='fret'>
            <h1>Contact Us</h1>
            <h5 className='wheat'>Contact<span className='ponk'> // Contact</span></h5>
        </div>
        <div className='all'>
            <div className='nexus'>
                <p>We are here to help you! <br/>Please Contact  Us!</p>
                <div className='nextup'>
                    <form action='#' className='forms'>
                        <input placeholder="Enter your country or city" type="text">
                        </input>
                        <button type="submit">
                            <IoIosSearch />
                        </button>
                    </form>
                </div>

                <div className='nerd'>
                    <h3>STORE IN NEW YORK</h3>
                    <p>Your address goes here.<br/>
                       0123456789
                       demo@example.com
                       www.example.com
                    </p>

                    <span>See On The Map</span>

                </div>
                <div className='nerd'>
                    <h3>STORE IN NEW YORK</h3>
                    <p>Your address goes here.<br/>
                       0123456789
                       demo@example.com
                       www.example.com
                    </p>

                    <span>See On The Map</span>

                </div>  
            </div>
            <div className='nivea'>
                <p>Send a Request</p>

                <form action='#'>
                    <input placeholder="Name*" type="text" className='bl'>
                    </input>
                    <input placeholder="Email*" type="text" className='bbl'>
                    </input>
                    <input placeholder="Subject*" type="text" className='lbbl'>
                    </input>
                    <textarea name='message' placeholder='Message Here' className='ubbl'>
                    </textarea>
                    <button className='butt'> Send Message</button>
                </form>

            

            </div>

            {/* appypie */}
        </div>

    </div>
  )
}

export default Constant
