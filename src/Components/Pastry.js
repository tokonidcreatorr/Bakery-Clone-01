import React from 'react'

const Pastry = (props) => {
  return (
    <div className='pastry'>
        <div className='meal'>
          <img src= {props.best}/>
          {/* <h3>{props.pastry}</h3>
          <h2>{props.}</h2> */}
        </div>
    </div>
  )
}

export default Pastry
