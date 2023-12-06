import React, { useState } from 'react'
import data from '../data.json'

export default function Crew() {
    const crew = data.crew;
    const [value,setValue] = useState(0)
    function handleClick(index){
        setValue(index)
    }
  return (
    <div className='crew'>
          <div className="content">
            <div className="col">
                <h2 className='title'>
                    <span>02 </span>MEET YOUR CREW
                </h2>
                    <div className='person'>
                        <h2 className='role'>{crew[value].role}</h2>
                        <h1 className='name'>{crew[value].name}</h1>
                        <p className='bio'>{crew[value].bio}</p>
                    </div>
                    <div className='dot-container'>
                    {crew.map((pers,index)=>(
                        <div className={`dot ${index===value ? 'activated' : ''}`}  onClick={()=>{handleClick(index)}}></div>
                    ))}
                    </div>
            </div>
            <div className="col">
                <img src={crew[value].images.png} alt={crew[value].name} />
            </div>
          </div>
    </div>
  )
}
