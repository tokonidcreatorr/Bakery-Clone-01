import React from 'react'
import Image1 from '../Images/breadcrumbs-bg.webp'
import Image2 from '../Images/yootoobe.jpg'
import { useRef } from 'react'
import ReactPlayer from 'react-player'
import { useState } from 'react'
import Brand1 from '../Images/brand1.webp'
import Brand2 from '../Images/brand2.webp'
import Brand3 from '../Images/brand3.webp'
import Brand4 from '../Images/brand4.webp'
import Brand5 from '../Images/brand5.webp'
import Kinan from '../Images/kinan.webp'
import Kianna from '../Images/kianna.webp'
import Pham from '../Images/pham.webp'
import Chef from '../Images/chefo.webp'
import Louder from './Bearer'
import Ralu from '../Images/sugar.webp';
import Reece from '../Images/rolls.webp';
import Riri from '../Images/fast.webp';
import Rene from '../Images/chocomate.webp';
import Bearer from './Bearer'

const Adelard = () => {
    const videolink= 'https://www.youtube.com/watch?v=2Zt8va_6HRk'
    const playerRef= useRef(null)
    const [show, setShow] = useState(false)

    function showvideo(){
        setShow(true)
    }
    function hideVideo(){
        setShow(false)
    }
    return (
        <div className='adelaide'>
              {/* <img src= {Image1}/> */}
          <div className='frost'>
              <h1>About Us</h1>
              <h5 className='homie'>Home<span className='funk'> // About Us</span></h5>
          </div>
          <section className='video-section'>
              <div className='video'>
      
                  <img src= {Image2} onClick={showvideo}/>
      
      
                  {
              show ? 
              <div className='players'>
                  <p onClick={hideVideo}>X</p>
              <ReactPlayer
                  ref={playerRef}
                  url={videolink}
                  width='60%'
                  height='80%'
                  controls={true}
                  playing= {true}
                  />
              </div>
               :null
      
              }
              </div>
      
      
          </section>
          <div className='row'>
              <div className='nextpart'>
                  <div className='colloquial'>
                      <h2>Our Vision</h2>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmoddll<br/>
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni quis<br/> 
                          nostrud exercit ullamco laboris nisi ut aliquip ex ea commodo conseql Duis aute <br/>
                          irure dolor in reprehendergg in voluptate velit esse cillum dolore eu fugiat nulla<br/>
                          pariatur. Excepteur sint occaecat.
                      </p>
                  </div>
              </div>
              <div className='roger'>
              <div className='colloquial'>
                      <h2>Our Mission</h2>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmoddll<br/>
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni quis<br/> 
                          nostrud exercit ullamco laboris nisi ut aliquip ex ea commodo conseql Duis aute <br/>
                          irure dolor in reprehendergg in voluptate velit esse cillum dolore eu fugiat nulla<br/>
                          pariatur. Excepteur sint occaecat.
                      </p>
                  </div>
              </div>
          </div>
          <div className='contain'>   
              <div className='feats'>
                  <img src={Brand1} className='brodie'/>
                  <img src={Brand2} className='brodie'/>
                  <img src={Brand3} className='brodie'/>
                  <img src={Brand4} className='brodie'/>
                  <img src={Brand5}  className='brodie'/>
      
              </div>
          </div>
          <div className='team'>
              <div className='team-head'>
                  <h2>Team Member</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod<br/>
                  tempor incididunt ut labore et dolore magna</p>
              </div>
              <div className='team-members'>
                  <img src={Kinan}/>
                  <img src={Kianna}/>
                  <img src={Pham}/>
              </div>
          </div>
          <div className='plan'>
              <div className='placebo'>
                  <img src={Chef}/>
              </div>
              <div className='texting'>
                  <h3>KIANNA PHAM</h3>
                  <h4>Customer</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicingl <br/> elit, sed do eiusmod
                  tempor incididunt ut laboredolor<br/> et dolore magna aliqua. Ut enim ad minim veniam, quis nostru<br/> exercitation ullamco laboris.</p>
              </div>
          </div>
      
        <section className='i-love-bread'>
              <Bearer love={Reece} ayra= 'PASTRY' starr= 'Lorem ipsum dolor sit ametgtol consecr adipiscing elit.'/>
              <Bearer love={Riri} ayra= 'BREAKFAST' starr= 'Lorem ipsum dolor sit ametgtol consecr adipiscing elit.'/>
              <Bearer love={Rene} ayra= 'COFEE CAKE' starr= 'Lorem ipsum dolor sit ametgtol consecr adipiscing elit.'/>
              <Bearer love={Ralu} ayra= 'BAKE TOAST' starr= 'Lorem ipsum dolor sit ametgtol consecr adipiscing elit.'/>
        </section>
      
      </div>
      
      ) 

}
export default Adelard