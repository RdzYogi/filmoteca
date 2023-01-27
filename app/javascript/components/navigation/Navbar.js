import React from 'react'
import { Link, NavLink } from "react-router-dom";
import logo_film from '../../assets/images/logo_film.png';


function Navbar() {
  return (
    <nav id='navbar' className='w-full bg-white py-4 transition duration-300 ease-in-out z-40 top-0 fixed'>
        <div className=" px-4 sm:px-6">
        <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-12 px-2">
          <Link to='/' className="ml-4 mt-2">
            <img
            src={logo_film}
            alt="logo"
            width={420}
            height={380}
            className=""/>
          </Link>
          <div className="ml-4 mt-2 flex-shrink-0">
          <NavLink to='/' >
            <p className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-button transition duration-300 ease-in-out mx-4">
              Inicio
            </p>
          </NavLink>
          <NavLink to='/calendario'>
            <p className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-button transition duration-300 ease-in-out mx-4">
              Programacion
            </p>
          </NavLink>
          <NavLink to='/ciclos'>
            <p className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-button transition duration-300 ease-in-out mx-4">
              Ciclos
            </p>
          </NavLink>
          <NavLink to='/peliculas'>
            <p className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-button transition duration-300 ease-in-out mx-4">
              Peliculas
            </p>
          </NavLink>
          <NavLink to='/noticias'>
            <p className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-button transition duration-300 ease-in-out mx-4">
              Noticias
            </p>
          </NavLink>
          <NavLink to='/'>
            <p className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-button transition duration-300 ease-in-out mx-4">
              Contacto
            </p>
          </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
