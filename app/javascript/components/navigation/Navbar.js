import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment, useEffect, useState } from 'react'
import { Link, NavLink } from "react-router-dom";
// import logo_blanco from '../../assets/images/logo-blanco.png';
import { useDispatch, useSelector } from 'react-redux'
import { userSignOut } from "../../redux/slices/userSlice"
// For fontawesome free-solid, free-regular, free-brands, fontawesome-free
import { faMagnifyingGlass, faCalendarDays, faFilm, faNewspaper, faBars, faRectangleXmark, faXmark} from '@fortawesome/free-solid-svg-icons'


const maxSearchResults = 5;

function Navbar() {
  const dispatch = useDispatch()
  const moviesData= useSelector(state => state.dataManager.movies)
  const cyclesData = useSelector(state => state.dataManager.cycles)

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
  const isAdmin = useSelector(state => state.userManager.currentUser.admin);

  // Logic for the dropdown menu
  const [isOpen, setIsOpen] = useState(false);
  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
    setIsSearching(false);
    setSearchResults([])
  }

  // Logic for search bar
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchButton = () => {
    setIsSearching(!isSearching);
    setSearchResults([])
    setIsOpen(false);
  }
  const handleSearchInput = (e) => {
    // console.log(e.target.value, moviesData, cyclesData)
    // setSearchTerm(e.target.value);
    const regularExpression = new RegExp(e.target.value, 'i');
    if (e.target.value === "") {
      setSearchResults([])
    } else {
      if (moviesData.length > 0 && cyclesData.length > 0) {
        setSearchResults([])
        const movieResultData = []
        moviesData.forEach(movie =>{
          // console.log(movie.movie.title.match(regularExpression))
          if (movie.movie.title.match(regularExpression) && movieResultData.length < maxSearchResults) {
            movieResultData.push(
              <Link className='flex justify-between' key={movie.movie.slug+movie.movie.id+movie.movie.title} to={"/movies/"+ movie.movie.slug} >
                <p className='ml-5'>{movie.movie.title + " - " + movie.movie.director}</p>
                <p className='mr-5'>- Pelicula</p>
              </Link>
            )
          }
        })
        setSearchResults(prevState => [...prevState, ...movieResultData])
        const cycleResultData = []
        cyclesData.forEach(cycle => {
          if ((cycle.name.match(regularExpression)) && (cycleResultData.length + movieResultData.length) < maxSearchResults) {
            cycleResultData.push(
              <Link className='flex justify-between' key={cycle.slug} to={"/ciclos/"+ cycle.slug} >
                <p className='ml-5'>{cycle.name}</p>
                <p className='mr-5'>- Cyclo</p>
              </Link>
            )
          }
        })
        setSearchResults(prevState => [...prevState, ...cycleResultData])
      }
    }
  }

  return (
    <div className='top-0 w-full fixed z-[10000]'>
      <nav id='navbar' className='w-full bg-black pt-4 transition duration-300 ease-in-out '>
        {/* Logo */}
        <div className="px-4 sm:px-6 mt-4 mb-2">

          {/* Logo and links */}
          <div className="w-full md:w-[90%] mx-auto flex flex-wrap items-center justify-center md:justify-between px-2 mb-4">

            <Link to='/' className="">
              <img
              src="https://res.cloudinary.com/drz3yyvjm/image/upload/v1677832685/Filmoteca/logo-blanco_dvzj5o.png"
              alt="logo"
              width={390}
              height={350}
              className=""/>
            </Link>

            <div className="text-white hidden md:flex">
              {isSignedIn ?
              <div className="flex items-center">
                <Link to="/user_details" className='p-1 border rounded text-white border-black transition-all duration-300 hover:border-white'>MI PERFIL</Link>
                <button className="p-1 border rounded text-white border-black transition-all duration-300 hover:border-white" onClick={handleOnClickSignOut}>DESCONECTAR</button>
              </div>:
              <Link to="/sign_in" className="p-1 border rounded text-white border-black transition-all duration-300 hover:border-white">INGRESAR</Link>}
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
            <button onClick={handleSearchButton} className="flex items-center text-lg font-bold leading-6 text-white transition duration-300 ease-in-out border-b-2 border-black hover:border-white">
              <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </button>
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
            <button onClick={handleSearchButton} className='flex items-center text-lg font-bold leading-6 text-white'>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <button id="drop_down_button" onClick={handleDropdownClick} className='flex items-center text-lg font-bold leading-6 text-white cursor-pointer'>
              {isOpen ? <FontAwesomeIcon icon={faRectangleXmark} /> : <FontAwesomeIcon icon={faBars} />}
            </button>
          </div>
        </div>

        {/* Drop down menu for mobile */}

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

      {/* Drop down for search input */}
      { isSearching &&
        <>
          <div className='w-full flex justify-center'>
            <div className='w-[90%] md:w-1/2'>
              <input placeholder='Buscar por pelicula o ciclo' autoFocus onChange={handleSearchInput} className='border rounded-lg border-gray-600 w-full'></input>
              { searchResults.length > 0 &&
                <div className='w-full border border-gray-800 h-fit bg-white mx-auto mt-1 flex flex-col'>
                  {searchResults}
                </div>
              }
            </div>
            <button onClick={handleSearchButton} className='ml-2 md:ml-3 text-lg h-fit'>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </>
      }
    </div>
  )
}

export default Navbar
