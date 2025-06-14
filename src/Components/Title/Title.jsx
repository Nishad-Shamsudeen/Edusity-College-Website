import React from 'react'
import './Title.css'

export default function Title({subTitle,title}) {
  return (
    <div className='title container'>
        <p>{subTitle}</p>
        <h2>{title}</h2>
    </div>
  )
}
