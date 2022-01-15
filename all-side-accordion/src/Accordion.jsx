import React from 'react'
import { useState } from 'react'
import './Accordion.css'
export default function Accordian({content,Title,dir}) {
    const [Open,setOpen]=useState(false)
    return (
      <div
        className={'accordian'+dir}
        onClick={() => {
          setOpen(!Open);
        }}
      >
        <div className="title">{Title}</div>

        {Open ? <span>{content}</span> : <div></div>}
      </div>
    );
}