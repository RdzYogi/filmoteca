import React from 'react'

function Label(props) {
  return (
    <label for={props.for} className="block mb-2 font-medium text-black">
      {props.label}
    </label>
  )
}

export default Label
