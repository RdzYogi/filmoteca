import React from 'react'
import { Link } from 'react-router-dom'

function DownloadButton() {
  return (
    <Link target="_blank" to={{pathname:"https://www.culturaydeporte.gob.es/dam/jcr:40239c2a-1105-41ef-9397-34e9abb78fb2/programaci-n-de-marzo-2023---filmoteca-espa-ola.pdf"}} className="">
      <button type="button" className="px-6 pt-2.5 pb-2 bg-gray-200 text-black font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-300 active:shadow-lg transition duration-150 ease-in-out flex align-center">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download"
          className="w-3 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor"
            d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z">
          </path>
        </svg>
        Descarga Programa
      </button>
    </Link>
  )
}

export default DownloadButton
