import React from 'react'

const Codeine = (props) => {
  return (
    <div className='coke'>
        <div className='caine'>
          <img src= {props.images}/>
          <p>{props.word}</p>
          <h2>{props.numbers}</h2>
        </div>
    </div>
  )
}

export default Codeine
