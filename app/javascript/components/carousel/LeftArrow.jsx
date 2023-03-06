import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function LeftArrow({ onClick}) {
  return (
    <i className='w-10 h-10 rounded-full bg-black z-1000 absolute left-3 cursor-pointer opacity-50 transition-all duration-300 hover:opacity-80 flex justify-center items-center' onClick={() => onClick()}>
      <FontAwesomeIcon className='text-white text-lg' icon={faChevronLeft} />
    </i>
  )
}

export default LeftArrow
