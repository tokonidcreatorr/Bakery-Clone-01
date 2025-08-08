import React from 'react'
import Image1 from '../Images/breadcrumbs-bg.webp'
import Evade from '../Components/Evade';
import telefono from '../Images/ppig.webp'
import television from '../Images/cppl.webp'
import sasuke from '../Images/waffl.webp'

const Shoppie = () => {
  return (
    <div className='adelaide'>
        <img src= {Image1}/>
        <div className='frost'>
            <h1>Products</h1>
            <h5 className='homie'>Home<span className='funk'> // Shop left sidebar</span></h5>
        </div>
      <section className='street'>
      <Evade image={telefono} words= 'Products name here' number= '$22.00'/>
      <Evade image={television} words= 'Lorem, ipsum dolor' number= '$24.00'/>
      <Evade image={sasuke} words= 'Praesentium vero nescui' number= '$28.00'/>
      <Evade image={telefono} words= 'Products name here' number= '$22.00'/>
      <Evade image={television} words= 'Lorem, ipsum dolor' number= '$24.00'/>
      <Evade image={sasuke} words= 'Praesentium vero nescui' number= '$28.00'/>
      <Evade image={telefono} words= 'Products name here' number= '$22.00'/>
      <Evade image={television} words= 'Lorem, ipsum dolor' number= '$24.00'/>
      </section>



    </div>
  )
}

export default Shoppie
