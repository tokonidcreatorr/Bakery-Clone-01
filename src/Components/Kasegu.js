import React from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import { SlCreditCard } from "react-icons/sl";
import { BsBoxSeam } from "react-icons/bs";
import Shipping from '../Images/shipping1.webp'
import Credit$ from '../Images/card.webp'
import Refundme from '../Images/refund.webp'
import Creative from './Creative';
const Kasegu = (props) => {
  return (
    <div className='kasegu'>
        <footer>
        <div className='darsh'>

          <div className='dart'>
                <img src= {Shipping}/>
                <div className='delusion'>
                    <p> Free Shipping</p>
                    <h4>Capped at $39 per order</h4>
                </div>
                <img src= {Credit$}/>
                <div className='delulu'>
                    <p> Free Shipping</p>
                    <h4>Capped at $39 per order</h4>
                </div>
                <img src= {Refundme}/>
                <div className='dericko'>
                    <p> Free Shipping</p>
                    <h4>Capped at $39 per order</h4>
                </div>
        </div>
        <Creative/>

        </div>
        </footer>
    </div>
  )
}

export default Kasegu
