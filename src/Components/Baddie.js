import React from 'react'
import Image1 from '../Images/breadcrumbs-bg.webp'
import { TfiAngleDown } from "react-icons/tfi";
import { useState } from 'react';
import { useRef } from 'react';

const Baddie = () => {
  const [names, setNames] =  useState()
  const [words, setWords] =  useState(false)
  const showRef= useRef(null)

  function showwords(){
      setWords(true)
  }
  function hidewords(){
      setWords(false)
  }
  return (
    <div className='adelaide'>
        <div className='frost'>
            <h1>FAQ</h1>
            <h5 className='homie'>Home<span className='funk'> // FAQ</span></h5>
        </div>
          <h1 className='general'>General Question</h1>

    <section className='wrapper'>
        <div className='bhaddie'>
            <div className='hearth'>
              <h4>Before you get started</h4>
              {
                <TfiAngleDown onClick={showwords}/>
              }
              
            </div>
              <p>
              Nulla imperdiet odio tempor nisl vulputate scelerisque.Fusce interdum<br/>
              convallis. Vivamus efficitur purus eu elit scelerisque blandit. Nullam viverra est
              quis erat fringilla, at rutrum sem lacinia.
              </p>
        </div>
        
        <div className='bhaddie'>
            <div className='hearth'>
              <h4>Compatibility with premium plugins</h4>
              <TfiAngleDown/>
        </div>
          <p>
            Nulla imperdiet odio tempor nisl vulputate scelerisque.Fusce interdum <br/>
            convallis. Vivamus efficitur purus eu elit scelerisque blandit. Nullam viverra est
            quis erat fringilla, at rutrum sem lacinia.
          </p>
       </div>

       <div className='bhaddie'>
            <div className='hearth'>
            <h4>Compatibility with premium plugins</h4>
            <TfiAngleDown/>
        </div>
          <p>
            Nulla imperdiet odio tempor nisl vulputate scelerisque.Fusce interdum<br/>
            convallis. Vivamus efficitur purus eu elit scelerisque blandit. Nullam viverra est
            quis erat fringilla, at rutrum sem lacinia.
          </p>
       </div>

       <div className='bhaddie'>
            <div className='hearth'>
              <h4>Install the demo contents</h4>
              <TfiAngleDown/>
        </div>
          <p>
            Nulla imperdiet odio tempor nisl vulputate scelerisque.Fusce interdum<br/>
            convallis. Vivamus efficitur purus eu elit scelerisque blandit. Nullam viverra est
            quis erat fringilla, at rutrum sem lacinia.
          </p>
       </div>

       <div className='bhaddie'>
            <div className='hearth'>
            <h4>Install the demo contents</h4>
            <TfiAngleDown/>
        </div>
          <p>
            Nulla imperdiet odio tempor nisl vulputate scelerisque.Fusce interdum<br/>
            convallis. Vivamus efficitur purus eu elit scelerisque blandit. Nullam viverra est
            quis erat fringilla, at rutrum sem lacinia.
          </p>
       </div>

       <div className='bhaddie'>
            <div className='hearth'>
              <h4>Translation and location services</h4>
              <TfiAngleDown/>
        </div>
          <p>
            Nulla imperdiet odio tempor nisl vulputate scelerisque.Fusce interdum<br/>
            convallis. Vivamus efficitur purus eu elit scelerisque blandit. Nullam viverra est
            quis erat fringilla, at rutrum sem lacinia.
          </p>
       </div>

       <div className='bhaddie'>
            <div className='hearth'>
            <h4>Translation and location services</h4>
            <TfiAngleDown/>
        </div>
          <p>
            Nulla imperdiet odio tempor nisl vulputate scelerisque.Fusce interdum<br/>
            convallis. Vivamus efficitur purus eu elit scelerisque blandit. Nullam viverra est
            quis erat fringilla, at rutrum sem lacinia.
          </p>
       </div>

       <div className='bhaddie'>
            <div className='hearth'>
              <h4>Live Chat Support</h4>
              <TfiAngleDown/>
        </div>
          <p>
            Nulla imperdiet odio tempor nisl vulputate scelerisque.Fusce interdum<br/>
            convallis. Vivamus efficitur purus eu elit scelerisque blandit. Nullam viverra est
            quis erat fringilla, at rutrum sem lacinia.
          </p>
       </div>

       <div className='bhaddie'>
            <div className='hearth'>
              <h4>Before you get started</h4>
              <TfiAngleDown/>
        </div>
          <p>
            Nulla imperdiet odio tempor nisl vulputate scelerisque.Fusce interdum<br/>
            convallis. Vivamus efficitur purus eu elit scelerisque blandit. Nullam viverra est
            quis erat fringilla, at rutrum sem lacinia.
          </p>
       </div>

       <div className='bhaddie'>
            <div className='hearth'>
              <h4>Before you get started</h4>
              <TfiAngleDown className='bruise'/>
        </div>
          <p>
            Nulla imperdiet odio tempor nisl vulputate scelerisque.Fusce interdum<br/>
            convallis. Vivamus efficitur purus eu elit scelerisque blandit. Nullam viverra est
            quis erat fringilla, at rutrum sem lacinia.
          </p>
       </div>
    </section>
    <h1 className='general'>Payment & Gift Card</h1>
    <section className='wrapper'>
        <div className='bhaddie'>
            <div className='hearth'>
              <h4>Changing the timezone</h4>
              <TfiAngleDown/>
            </div>
              <p>
              Nulla imperdiet odio tempor nisl vulputate scelerisque.Fusce interdum<br/>
              convallis. Vivamus efficitur purus eu elit scelerisque blandit. Nullam viverra est
              quis erat fringilla, at rutrum sem lacinia.
              </p>
        </div>
        
        <div className='bhaddie'>
            <div className='hearth'>
              <h4>Fully responsive</h4>
              <TfiAngleDown/>
        </div>
          <p>
            Nulla imperdiet odio tempor nisl vulputate scelerisque.Fusce interdum <br/>
            convallis. Vivamus efficitur purus eu elit scelerisque blandit. Nullam viverra est
            quis erat fringilla, at rutrum sem lacinia.
          </p>
       </div>

       <div className='bhaddie'>
            <div className='hearth'>
              <h4>Developer documentation</h4>
              <TfiAngleDown/>
        </div>
          <p>
            Nulla imperdiet odio tempor nisl vulputate scelerisque.Fusce interdum<br/>
            convallis. Vivamus efficitur purus eu elit scelerisque blandit. Nullam viverra est
            quis erat fringilla, at rutrum sem lacinia.
          </p>
       </div>

       <div className='bhaddie'>
            <div className='hearth'>
              <h4>Translation and localization services</h4>
              <TfiAngleDown/>
        </div>
          <p>
            Nulla imperdiet odio tempor nisl vulputate scelerisque.Fusce interdum<br/>
            convallis. Vivamus efficitur purus eu elit scelerisque blandit. Nullam viverra est
            quis erat fringilla, at rutrum sem lacinia.
          </p>
       </div>

       <div className='bhaddie'>
            <div className='hearth'>
              <h4>Connect social media channels</h4>
              <TfiAngleDown/>
        </div>
          <p>
            Nulla imperdiet odio tempor nisl vulputate scelerisque.Fusce interdum<br/>
            convallis. Vivamus efficitur purus eu elit scelerisque blandit. Nullam viverra est
            quis erat fringilla, at rutrum sem lacinia.
          </p>
       </div>

       <div className='bhaddie'>
            <div className='hearth'>
              <h4>Live Chat Support</h4>
              <TfiAngleDown/>
        </div>
          <p>
            Nulla imperdiet odio tempor nisl vulputate scelerisque.Fusce interdum<br/>
            convallis. Vivamus efficitur purus eu elit scelerisque blandit. Nullam viverra est
            quis erat fringilla, at rutrum sem lacinia.
          </p>
       </div>

       <div className='bhaddie'>
            <div className='hearth'>
              <h4>Optimize Theme Speed and Performance</h4>
              <TfiAngleDown/>
        </div>
          <p>
            Nulla imperdiet odio tempor nisl vulputate scelerisque.Fusce interdum<br/>
            convallis. Vivamus efficitur purus eu elit scelerisque blandit. Nullam viverra est
            quis erat fringilla, at rutrum sem lacinia.
          </p>
       </div>

       <div className='bhaddie'>
            <div className='hearth'>
              <h4>RTL Support Now</h4>
              <TfiAngleDown/>
        </div>
          <p>
            Nulla imperdiet odio tempor nisl vulputate scelerisque.Fusce interdum<br/>
            convallis. Vivamus efficitur purus eu elit scelerisque blandit. Nullam viverra est
            quis erat fringilla, at rutrum sem lacinia.
          </p>
       </div>
    </section>
    <div className='space'>

    </div>

    </div>
  )
}

export default Baddie


    
