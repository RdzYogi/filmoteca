import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import logo_blanco from '../../assets/images/logo-blanco.png';
import { library } from '@fortawesome/fontawesome-svg-core'
// For fontawesome free-solid, free-regular, free-brands, fontawesome-free
import { faMagnifyingGlass, faCalendarDays, faFilm, faNewspaper, faBars} from '@fortawesome/free-solid-svg-icons'


function Navbar() {
  // TODO
  // Figure out a better way to use fontawsome
  library.add(faMagnifyingGlass, faCalendarDays);
  return (
    <nav id='navbar' className='w-full bg-black pt-4 transition duration-300 ease-in-out z-40 top-0 fixed'>
      {/* Logo */}
      <div className="px-4 sm:px-6 mt-4 mb-2">
        <div className="-mt-2 flex flex-wrap items-center justify-center md:justify-between sm:flex-nowrap md:px-12 px-2 mb-4">
          <Link to='/' className="2xl:ml-40 xl:ml-4">
            <img
            src={logo_blanco}
            alt="logo"
            width={390}
            height={350}
            className=""/>
          </Link>
          <div className="hidden md:flex bg-gray-500 h-10 w-10 rounded-full mr-40"></div>
        </div>

        {/* NavLink is going to add the active class to the link that we will define */}
        {/* application.tailwind.css file */}

        {/* The Desktop navbar */}
        <div className="max-w-7xl mx-auto mt-6 pb-1 hidden md:flex justify-around">
          <NavLink to='/calendario' className={'flex items-center text-lg font-bold leading-6 text-white transition duration-300 ease-in-out border-b-2 border-black hover:border-white'}>
            CALENDARIO
          </NavLink>
          <div className='bg-white w-px h-6'></div>
          <NavLink to='/ciclos' className='flex items-center text-lg font-bold leading-6 text-white transition duration-300 ease-in-out border-b-2 border-black hover:border-white'>
            CICLOS
          </NavLink>
          <div className='bg-white w-px h-6'></div>
          <NavLink to='/cartelera' className='flex items-center text-lg font-bold leading-6 text-white transition duration-300 ease-in-out border-b-2 border-black hover:border-white'>
            CARTELERA
          </NavLink>
          <div className='bg-white w-px h-6'></div>
          <NavLink to='/noticias' className='flex items-center text-lg font-bold leading-6 text-white transition duration-300 ease-in-out border-b-2 border-black hover:border-white'>
            NOTICIAS
          </NavLink>
          <div className='bg-white w-px h-6'></div>
          <NavLink to='/abonos' className='flex items-center text-lg font-bold leading-6 text-white transition duration-300 ease-in-out border-b-2 border-black hover:border-white'>
            ABONOS
          </NavLink>
          <div className='bg-white w-px h-6'></div>
          <NavLink to='/contacto' className='flex items-center text-lg font-bold leading-6 text-white transition duration-300 ease-in-out border-b-2 border-black hover:border-white'>
            CONTACTO
          </NavLink>
          <div className='bg-white w-px h-6'></div>
          <p className="flex items-center text-lg font-bold leading-6 text-white transition duration-300 ease-in-out border-b-2 border-black hover:border-white">
            <FontAwesomeIcon icon="magnifying-glass"/>
          </p>
        </div>

        {/* Mobile navbar */}
        <div className="md:hidden flex max-w-full justify-around">
          <NavLink to='/calendario' className='flex items-center text-lg font-bold leading-6 text-white '>
            <FontAwesomeIcon icon="calendar-days"/>
          </NavLink>
          <NavLink to='/ciclos' className='flex items-center text-lg font-bold leading-6 text-white'>
            <div className='grid grid-rows-2 grid-flow-col gap-1 text-xs scale-75'>
              <FontAwesomeIcon icon={faFilm} />
              <FontAwesomeIcon icon={faFilm} />
              <FontAwesomeIcon icon={faFilm} />
              <FontAwesomeIcon icon={faFilm} />
            </div>

          </NavLink>
          <NavLink to='/cartelera' className='flex items-center text-lg font-bold leading-6 text-white'>
            <FontAwesomeIcon icon={faFilm} />
          </NavLink>
          <NavLink to='/noticias' className='flex items-center text-lg font-bold leading-6 text-white'>
            <FontAwesomeIcon icon={faNewspaper} />
          </NavLink>
          <NavLink to='/' className='flex items-center text-lg font-bold leading-6 text-white'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </NavLink>
          <NavLink to='/' className='flex items-center text-lg font-bold leading-6 text-white'>
            <FontAwesomeIcon icon={faBars} />
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
