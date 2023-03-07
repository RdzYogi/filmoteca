import { faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

const moviesPerPage = 6
const selectedBackground = 'bg-gray-200'

function Paginate({movies}) {
  const [currentPage, setCurrentPage] = useState(1)
  const [pages, setPages] = useState([])
  useEffect(() => {
    window.scrollTo(0, 0)
    const pagesTotal = Math.ceil(movies.length/moviesPerPage)
    // console.log(pagesTotal)
    setPages([])
    for (let i = 0; i < pagesTotal; i++) {
      setPages(pages => [...pages,
        <button className={'font-bold mx-5 h-6 w-6 transition-all duration-300 rounded-full '+ (i===0 ? selectedBackground : "" )} key={i+"page"} onClick={handleClick}>{i+1}</button>
      ])
    }
  }, [movies])

  const handleClick = (e) => {
    window.scrollTo(0, 0)
    e.preventDefault()
    setCurrentPage(Number(e.target.innerText))
    const allPagesButtons = document.getElementById('pages').children
    for (let i = 0; i < allPagesButtons.length; i++) {
      allPagesButtons[i].classList.remove(selectedBackground)
    }
    e.target.classList.add(selectedBackground)
  }
  const handleFirst = (e) => {
    window.scrollTo(0, 0)
    e.preventDefault()
    setCurrentPage(1)
    const allPagesButtons = document.getElementById('pages').children
    for (let i = 0; i < allPagesButtons.length; i++) {
      allPagesButtons[i].classList.remove(selectedBackground)
    }
    allPagesButtons[0].classList.add(selectedBackground)
  }
  const handleLast = (e) => {
    window.scrollTo(0, 0)
    e.preventDefault()
    const pagesTotal = Math.ceil(movies.length/moviesPerPage)
    setCurrentPage(pagesTotal)
    const allPagesButtons = document.getElementById('pages').children
    for (let i = 0; i < allPagesButtons.length; i++) {
      allPagesButtons[i].classList.remove(selectedBackground)
    }
    allPagesButtons[pagesTotal-1].classList.add(selectedBackground)
  }

  const handlePrev = (e) => {
    window.scrollTo(0, 0)
    e.preventDefault()
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      const allPagesButtons = document.getElementById('pages').children
      for (let i = 0; i < allPagesButtons.length; i++) {
        allPagesButtons[i].classList.remove(selectedBackground)
      }
      allPagesButtons[currentPage-2].classList.add(selectedBackground)
    }
  }
  const handleNext = (e) => {
    window.scrollTo(0, 0)
    e.preventDefault()
    const pagesTotal = Math.ceil(movies.length/moviesPerPage)
    if (currentPage < pagesTotal) {
      setCurrentPage(currentPage + 1)
      const allPagesButtons = document.getElementById('pages').children
      for (let i = 0; i < allPagesButtons.length; i++) {
        allPagesButtons[i].classList.remove(selectedBackground)
      }
      allPagesButtons[currentPage].classList.add(selectedBackground)
    }
  }
  return (
    <>
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-y-4">
        {movies.slice((currentPage-1)*moviesPerPage, currentPage*moviesPerPage)}
      </div>

      { pages.length > 1 &&
        <div className="flex justify-center py-3">
          { pages.length > 2 &&
            <button onClick={handleFirst} className='flex items-center'>
            <FontAwesomeIcon icon={faAngleDoubleLeft}/>
          </button>}
          <button onClick={handlePrev} className='flex items-center ml-3'>
            <FontAwesomeIcon icon={faAngleLeft}/>
          </button>

          <div id="pages" className="flex justify-center">
            {pages}
          </div>

          <button onClick={handleNext} className='flex items-center'>
            <FontAwesomeIcon icon={faAngleRight}/>
          </button>
          { pages.length > 2 &&
            <button onClick={handleLast} className='flex items-center ml-3'>
            <FontAwesomeIcon icon={faAngleDoubleRight}/>
          </button>}
        </div>
      }
    </>
  )
}

export default Paginate
