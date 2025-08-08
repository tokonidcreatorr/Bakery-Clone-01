import React, { useState } from 'react'
import telefono from '../Images/ppig.webp'
import television from '../Images/cppl.webp'
import sasuke from '../Images/waffl.webp'
import naruto from '../Images/oreo.webp'
import Evade from './Evade';
import Pint from '../Images/pynk.webp';
import Ruby from '../Images/croissa.webp';
import Nate from '../Images/donut.webp';
import Cory from '../Images/brahd.webp';
import { Fa0 } from 'react-icons/fa6'


const Loyola = () => {

  const [feature, setFeature] = useState(true)
  const [best, setBest] = useState(false)
  const [news, setNews] = useState(false)


  function first(){
    setFeature(true)
    setBest(false)
    setNews(false)
  }

  function second(){
    setFeature(false)
    setBest(true)
    setNews(false)
  }

  function third(){
    setFeature(false)
    setBest(false)
    setNews(true)
  }



  return (
    <>
    <div className='loyola'>
        <h1>New Products</h1>

        <div className='blurt'>
        <p onClick={first} className={`${feature ? 'main' : '' }`}>Our Features</p>
        <p onClick={second} className={`${best ? 'main' : '' }`}>Bestsellers</p>
        <p onClick={third} className={`${news ? 'main' : '' }`}>New Items</p>
        </div>
        <p></p>
    </div>


    {
        feature ? 
    
      <section className='street'>
        <Evade image={telefono} words= 'Products name here' number= '$22.00'/>
        <Evade image={television} words= 'Lorem, ipsum dolor' number= '$24.00'/>
        <Evade image={sasuke} words= 'Praesentium vero nescui' number= '$28.00'/>
        <Evade image={naruto} words= 'Sit amet consectetur elit' number= '$32.00'/>
        <Evade image={Pint} words= 'Products name here' number= '$22.00'/>
        <Evade image={Ruby} words= 'Lorem, ipsum dolor' number= '$24.00'/>
        <Evade image={Nate} words= 'Praesentium vero nescui' number= '$28.00'/>
        <Evade image={Cory} words= 'Sit amet consectetur elit' number= '$32.00'/>
      </section>

      : null

    }

    {
        best ? 
    
      <section className='street'>
        <Evade image={Cory} words= 'Products name here' number= '$22.00'/>
        <Evade image={Nate} words= 'Lorem, ipsum dolor' number= '$24.00'/>
        <Evade image={Pint} words= 'Praesentium vero nescui' number= '$28.00'/>
        <Evade image={naruto} words= 'Sit amet consectetur elit' number= '$32.00'/>
        <Evade image={sasuke} words= 'Products name here' number= '$22.00'/>
        <Evade image={television} words= 'Lorem, ipsum dolor' number= '$24.00'/>
        <Evade image={Ruby} words= 'Praesentium vero nescui' number= '$28.00'/>
        <Evade image={Cory} words= 'Sit amet consectetur elit' number= '$32.00'/>
      </section>

      : null

    }

    {
           news ? 
        
          <section className='street'>
            <Evade image={sasuke} words= 'Products name here' number= '$22.00'/>
            <Evade image={naruto} words= 'Lorem, ipsum dolor' number= '$24.00'/>
            <Evade image={television} words= 'Praesentium vero nescui' number= '$28.00'/>
            <Evade image={telefono} words= 'Sit amet consectetur elit' number= '$32.00'/>
            <Evade image={sasuke} words= 'Products name here' number= '$22.00'/>
            <Evade image={Cory} words= 'Lorem, ipsum dolor' number= '$24.00'/>
            <Evade image={Nate} words= 'Praesentium vero nescui' number= '$28.00'/>
            <Evade image={Pint} words= 'Sit amet consectetur elit' number= '$32.00'/>
          </section>

          : null

        }

      </>
  )
}

export default Loyola
