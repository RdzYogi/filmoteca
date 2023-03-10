import React from 'react'

function SubmitButton(props) {
  return (
    <button type="submit" onClick={props.onClick} className="py-3 px-5 w-32 flex m-auto justify-center sm:m-0 font-medium text-center text-white rounded-sm bg-button-submit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-button-submit">
      {props.label}
    </button>
  )
}

export default SubmitButton
