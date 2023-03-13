import { faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

const moviesPerPage = 6
const selectedBackground = 'bg-gray-400'
const spacing = 'mx-1 md:mx-2'
const hoverBackground = 'hover:bg-gray-300'

function Paginate({movies}) {
  const [currentPage, setCurrentPage] = useState(1)
  const [pages, setPages] = useState([])
  useEffect(() => {
    window.scrollTo(0, 0)
    const pagesTotal = Math.ceil(movies.length/moviesPerPage)
    // console.log("triggered", pagesTotal)
    setCurrentPage(1)
    setPages([])
    for (let i = 0; i < pagesTotal; i++) {
      setPages(pages => [...pages,
        <button className={spacing + ' font-bold h-6 w-6 transition-all duration-300 rounded-full '+ (i===0 ? selectedBackground : hoverBackground )} key={i+"page"} onClick={handleClick}>{i+1}</button>
      ])
    }
  }, [movies])

  const handleClick = (e) => {
    window.scrollTo(0, 0)
    e.preventDefault()
    setCurrentPage(Number(e.target.innerText))
    resetButtons()
  }
  const handleFirst = (e) => {
    window.scrollTo(0, 0)
    e.preventDefault()
    setCurrentPage(1)
    resetButtons()
  }
  const handleLast = (e) => {
    window.scrollTo(0, 0)
    e.preventDefault()
    const pagesTotal = Math.ceil(movies.length/moviesPerPage)
    setCurrentPage(pagesTotal)
    resetButtons()
  }

  const handlePrev = (e) => {
    window.scrollTo(0, 0)
    e.preventDefault()
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      resetButtons()
    }
  }
  const handleNext = (e) => {
    window.scrollTo(0, 0)
    e.preventDefault()
    const pagesTotal = Math.ceil(movies.length/moviesPerPage)
    if (currentPage < pagesTotal) {
      setCurrentPage(currentPage + 1)
      resetButtons()
    }
  }

  // Logic for pagination of large number of pages
  const resetButtons = () => {
    const allPagesButtonsParent = document.getElementById('pages')
    if(allPagesButtonsParent === null) return
    console.log("resetting")
    const allPagesButtons = allPagesButtonsParent.children
    for (let i = 0; i < allPagesButtons.length; i++) {
      if (allPagesButtons[i].innerText === currentPage.toString()) {
        allPagesButtons[i].classList.add(selectedBackground)
        allPagesButtons[i].classList.remove(hoverBackground)
      } else {
      allPagesButtons[i].classList.remove(selectedBackground)
      if (allPagesButtons[i].nodeName === "BUTTON") {
        allPagesButtons[i].classList.add(hoverBackground)
      }
      }
    }
  }
  const formatPages = (pages, currentPage) => {
    const pagesTotal = pages.length
    // console.log(currentPage)
    resetButtons()

    const firstPage = <button className={spacing +' font-bold  h-6 w-6 transition-all duration-300 rounded-full ' +(currentPage === 1 ? selectedBackground : hoverBackground)} key={0+"page"} onClick={handleClick}>{1}</button>
    const lastPage = <button className={spacing +' font-bold h-6 w-6 transition-all duration-300 rounded-full ' + (currentPage === pagesTotal ? selectedBackground : hoverBackground)} key={pagesTotal-1+"page"} onClick={handleClick}>{pagesTotal}</button>
    const dotsBefore = <div className={spacing+' font-bold h-6'} key={pagesTotal+"pageDotsBefore"}>...</div>
    const dotsAfter = <div className={spacing+' font-bold h-6'} key={pagesTotal+"pageDotsAfter"}>...</div>
    if (currentPage < 4) {
      return [firstPage, pages[1], pages[2], pages[3], dotsAfter, lastPage]
    } else if (currentPage > pagesTotal-3) {
      return [firstPage, dotsBefore, pages[pagesTotal-4], pages[pagesTotal-3], pages[pagesTotal-2], lastPage]
    } else {
      return [firstPage, dotsBefore, pages[currentPage-2], pages[currentPage-1], pages[currentPage], dotsAfter, lastPage]
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
            <button onClick={handleFirst} className={' flex items-center transition duration-300 hover:opacity-50'}>
            <FontAwesomeIcon icon={faAngleDoubleLeft}/>
          </button>}
          <button onClick={handlePrev} className={' flex items-center ml-3 transition duration-300 hover:opacity-50'}>
            <FontAwesomeIcon icon={faAngleLeft}/>
          </button>

          <div id="pages" className="flex justify-center">
            {pages.length < 6 ? pages : formatPages(pages, currentPage)}
          </div>

          <button onClick={handleNext} className={' flex items-center transition duration-300 hover:opacity-50'}>
            <FontAwesomeIcon icon={faAngleRight}/>
          </button>
          { pages.length > 2 &&
            <button onClick={handleLast} className={' flex items-center ml-3 transition duration-300 hover:opacity-50'}>
            <FontAwesomeIcon icon={faAngleDoubleRight}/>
          </button>}
        </div>
      }
    </>
  )
}

export default Paginate
