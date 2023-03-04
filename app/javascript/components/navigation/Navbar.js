import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment, useEffect, useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import logo_blanco from '../../assets/images/logo-blanco.png';
import { useDispatch, useSelector } from 'react-redux'
import { userSignOut } from "../../redux/slices/userSlice"
// For fontawesome free-solid, free-regular, free-brands, fontawesome-free
import { faMagnifyingGlass, faCalendarDays, faFilm, faNewspaper, faBars, faRectangleXmark} from '@fortawesome/free-solid-svg-icons'



function Navbar() {
  const dispatch = useDispatch()
  useEffect(() => {
    const onWindowResize = () => {
      const width = window.innerWidth;
      if (width > 768) {
        setIsOpen(false);
      }
    }
    const onOutsideClick = (e) => {
      // console.log(e.target.id, e)
      if (e.target.id !== 'drop_down_menu' &&
          e.target.parentElement.parentElement.id !== 'drop_down_button' &&
          e.target.parentElement.id !== 'drop_down_button') {
        setIsOpen(false);
      }
    }
    window.addEventListener('resize', onWindowResize);
    document.body.addEventListener('click',onOutsideClick);
    return () => {
      window.removeEventListener('resize', onWindowResize),
      document.body.removeEventListener('click', onOutsideClick)
    }
  }, [])

  const handleOnClickSignOut = (e) => {
    e.preventDefault();
    dispatch(userSignOut())
  }


  // Logic for checking if the user is signed in
  const isSignedIn = useSelector(state => state.userManager.currentUser.logged_in);

  // Logic for the dropdown menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <nav id='navbar' className='w-full bg-black pt-4 transition duration-300 ease-in-out z-40 top-0 fixed z-[10000]'>
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
            {/* <Link to="/sign_in" className={(isSignedIn ? "bg-green-500 " : "bg-gray-500 ") + "hidden md:flex h-10 w-10 rounded-full mr-40 "}></Link> */}
            <div className="text-white hidden md:flex">
              {isSignedIn ?
              <div className='flex space-x-6'>
                <Link to="/user_details">MI PERFIL</Link>
                <button onClick={handleOnClickSignOut}>DESCONECTAR</button>
              </div>:
              <Link to="/sign_in">INGRESAR</Link>}
            </div>
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
              <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </p>
          </div>

          {/* Mobile navbar */}
          <div className="md:hidden flex max-w-full justify-around">
            <NavLink to='/calendario' className='flex items-center text-lg font-bold leading-6 text-white '>
              <FontAwesomeIcon icon={faCalendarDays}/>
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
            <button id="drop_down_button" onClick={() => setIsOpen(prev => !prev)} className='flex items-center text-lg font-bold leading-6 text-white cursor-pointer'>
              {isOpen ? <FontAwesomeIcon icon={faRectangleXmark} /> : <FontAwesomeIcon icon={faBars} />}
            </button>
          </div>
        </div>
        <div id="drop_down_menu" className={isOpen ? "flex flex-col ": "hidden " + 'bg-black w-full border-t-2 border-gray-500 transition duration-300 ease-in-out'}>
          <Link to="/abonos" className='text-lg py-2 w-fit font-bold self-center leading-6 text-white'>
              ABONOS
          </Link>
          <div className='h-px w-3/4 bg-white self-center'></div>
          <Link to="/contacto" className='text-lg py-2 w-fit font-bold self-center leading-6 text-white'>
              CONTACTO
          </Link>
          <div className='h-px w-3/4 bg-white self-center'></div>
          <div to="#" className='text-lg py-2 w-fit font-bold self-center leading-6 text-white'>
              {isSignedIn ?
              <button onClick={handleOnClickSignOut}>DESCONECTAR</button>:
              <Link to="/sign_in">INGRESAR</Link>}
          </div>
        </div>
      </nav>
    </Fragment>
  )
}

export default Navbar
