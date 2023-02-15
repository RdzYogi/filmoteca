import React from 'react'

function Input(props) {
  return (
    <input type={props.type} id={props.id} defaultValue={props.defaultValue} className="shadow-sm bg-form-bg border border-form-border text-gray-cycle rounded-sm focus:ring-black focus:border-black block w-full m-2.5 p-2.5" placeholder={props.placeholder} required />
  )
}

export default Input
