import React from 'react'
import Mainheader from '../Components/Mainheader';
import Bodies from '../Components/Bodies';
import Nato from '../Components/Nato';
import Loyola from '../Components/Loyola';
import Evade from '../Components/Evade';
import telefono from '../Images/ppig.webp'
import television from '../Images/cppl.webp'
import sasuke from '../Images/waffl.webp'
import naruto from '../Images/oreo.webp'
import itadori from '../Images/iwitw.jpg'
import Codeine from '../Components/Codeine';
import Pastry from '../Components/Pastry';
import Slick from '../Images/bastien.webp';
import Saiba from '../Images/pastry.webp';
import Shabby from '../Images/Qualite.webp';
import Louder from '../Components/Louder';
import Reece from '../Images/rolls.webp';
import Riri from '../Images/fast.webp';
import Rene from '../Images/chocomate.webp';
import Ralu from '../Images/sugar.webp';
import Bestie from '../Components/Bestie';
import Banner from '../Components/Banner';
import Mamushi from '../Components/Mamushi';
import Kasegu from '../Components/Kasegu';
import Watashi from '../Images/slices.webp'
import Creative from '../Components/Creative';




const Homepage = () => {
  return (
    <div>
      <Mainheader/> 
      <Bodies/>
      <Nato/>
      <Loyola/>

      {/* <section className='street'>
      <Evade image={telefono} words= 'Products name here' number= '$22.00'/>
      <Evade image={television} words= 'Lorem, ipsum dolor' number= '$24.00'/>
      <Evade image={sasuke} words= 'Praesentium vero nescui' number= '$28.00'/>
      <Evade image={naruto} words= 'Sit amet consectetur elit' number= '$32.00'/>
      </section> */}

      {/* <section className='streets'>
      <Codeine images={Pint} word= 'Atque earum ullam non.' numbers= '$35.00'/>
      <Codeine images={Ruby} word= 'Modi excepturi ut ipsam.' numbers= '$38.00'/>
      <Codeine images={Nate} word= 'Provident odio, are Unde.' numbers= '$28.00'/>
      <Codeine images={Cory} word= 'Products name here' numbers= '$32.00'/>
      </section> */}

      <section className='treets'>
      <Pastry best={Slick}/>
      <Pastry best={Saiba}/>
      <Pastry best={Shabby}/>
      </section>

      <section className='treet'>
      <Louder love={Reece} ayra= 'PASTRY' starr= 'Lorem ipsum dolor sit ametgtol consecr adipiscing elit.'/>
      <Louder love={Riri} ayra= 'BREAKFAST' starr= 'Lorem ipsum dolor sit ametgtol consecr adipiscing elit.'/>
      <Louder love={Rene} ayra= 'COFEE CAKE' starr= 'Lorem ipsum dolor sit ametgtol consecr adipiscing elit.'/>
      <Louder love={Ralu} ayra= 'BAKE TOAST' starr= 'Lorem ipsum dolor sit ametgtol consecr adipiscing elit.'/>

      </section>
      <Bestie/>
      <section className='street'>
      <Evade image={telefono} words= 'Products name here' number= '$22.00'/>
      <Evade image={television} words= 'Lorem, ipsum dolor' number= '$24.00'/>
      <Evade image={sasuke} words= 'Praesentium vero nescui' number= '$28.00'/>
      <Evade image={naruto} words= 'Sit amet consectetur elit' number= '$32.00'/>
      </section>

        
      <Banner/>
      <Mamushi/>
      <Kasegu/>
    </div>
  )
}

export default Homepage
