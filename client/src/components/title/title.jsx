import React from 'react'
import './title.css'

const title = ({subTtile,title}) => {
  return (
    <div className='title'>
        <p>{subTtile}</p>
        <h2>{title}</h2>
    </div>
  )
}

export default title;