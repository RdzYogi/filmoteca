import React from 'react'

function Label(props) {
  return (
    <label htmlFor={props.htmlFor} className='w-1/3'>
      {props.label}
    </label>
  )
}

export default Label
