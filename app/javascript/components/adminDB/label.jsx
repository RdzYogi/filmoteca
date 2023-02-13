import React from 'react'

function Label(props) {
  return (
    <label for={props.for} className='w-1/3'>
      {props.label}
    </label>
  )
}

export default Label
