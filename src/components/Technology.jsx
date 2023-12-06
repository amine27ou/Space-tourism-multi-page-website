import React, { useState } from 'react'
import data from '../data.json'

export default function Technology() {
    const technologies = data.technology
    const [value,setValue] = useState(0)
    function handleClick(index){
      setValue(index)
    }
  return (
    <div className='technology'>
        <div className="content">
            <div className="col">
            <h2 className="title">
            <span>03 </span>SPACE LAUNCH 101
          </h2>
          <div className="techno-container">
            <div className="mini-navbar">
            {technologies.map((tech, index) => (
          <div key={index} onClick={() => {handleClick(index)}} className={`circle ${index === value ? 'activated-circle': ''}`}>
            {index + 1}
          </div>
        ))}
            </div>
          </div>
            </div>
            <div className="col">
              <h3 className='title'>THE TERMINOLOGY </h3>
              <h1 className='name'>{technologies[value].name}</h1>
              <p className='bio'>{technologies[value].description}</p>
            </div>
            <div className="col">
              <img src={technologies[value].images.portrait} />
            </div>
        </div>
    </div>
  )
}
