import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link, NavLink } from "react-router-dom";
import logo_blanco from '../../assets/images/logo-blanco.png';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'


function Navbar() {
  library.add(faMagnifyingGlass);
  return (
    <nav id='navbar' className='w-full bg-black pt-4 transition duration-300 ease-in-out z-40 top-0 fixed'>
      <div className="px-4 sm:px-6 mt-4 mb-2">
        <div className="ml-40 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-12 px-2 mb-4">
          <Link to='/' className="ml-4">
            <img
            src={logo_blanco}
            alt="logo"
            width={390}
            height={350}
            className=""/>
          </Link>
          <div className="bg-gray-500 h-10 w-10 rounded-full mr-40"></div>
        </div>
        <div className="max-w-7xl mx-auto mt-6 pb-1 flex justify-around">
          <NavLink to='/' >
            <p className="text-lg inline-flex font-bold leading-6 text-white transition duration-300 ease-in-out mx-4">
              CALENDARIO
            </p>
          </NavLink>
          <NavLink to='/calendario'>
            <p className="text-lg inline-flex font-bold leading-6 text-white transition duration-300 ease-in-out mx-4">
              CICLOS
            </p>
          </NavLink>
          <NavLink to='/ciclos'>
            <p className="text-lg inline-flex font-bold leading-6 text-white transition duration-300 ease-in-out mx-4">
              CARTELERA
            </p>
          </NavLink>
          <NavLink to='/peliculas'>
            <p className="text-lg inline-flex font-bold leading-6 text-white transition duration-300 ease-in-out mx-4">
              NOTICIAS
            </p>
          </NavLink>
          <NavLink to='/noticias'>
            <p className="text-lg inline-flex font-bold leading-6 text-white transition duration-300 ease-in-out mx-4">
              ABONOS
            </p>
          </NavLink>
          <NavLink to='/'>
            <p className="text-lg inline-flex font-bold leading-6 text-white transition duration-300 ease-in-out mx-4">
              CONTACTO
            </p>
          </NavLink>
          <p className="text-lg inline-flex font-bold leading-6 text-white transition duration-300 ease-in-out mx-4">
          <FontAwesomeIcon icon="magnifying-glass" />
          </p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
