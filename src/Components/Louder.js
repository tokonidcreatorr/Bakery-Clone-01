import React from 'react'

const Louder = (props) => {
  return (
    <div className='louder'>
        <div className='rema'>
            <img src= {props.love}/>
            <h1>{props.ayra}</h1>
            <p>{props.starr}</p>
        </div>
    </div>
  )
}

export default Louder
