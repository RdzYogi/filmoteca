import React from 'react'

function Input(props) {
  return (
    <input type={props.type} name={props.name} defaultValue={props.defaultValue} className="shadow-sm bg-form-bg border border-form-border text-gray-cycle rounded-sm focus:ring-black focus:border-black block w-full m-2.5 p-2.5" placeholder={props.placeholder} onChange={props.onChange}
    required />
  )
}

export default Input
