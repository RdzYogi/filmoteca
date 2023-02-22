import React, {useState, useEffect} from 'react'
import Label from './label';
import Input from './input';
import SubmitButton from '../shared/SubmitButton';

function MovieCreate() {
  const csrfToken = document.querySelector("[name='csrf-token']").content
  const [availableCycles, setAvailableCycles] = useState([])

  let [newMovie, setNewMovie] = useState({
    title: "",
    runtime: "",
    director: "",
    description: "",
    quote: "",
    img_url: "",
    year: "",
    cycle_id: 0,
    session_id: 9,
    slug: ""
  })

  // get all cycles to select to which cycle a movie belongs to (asnyc + useEffect)
  async function fetchCycles() {
    const response = await fetch('/api/v1/cycles');
    if (!response.ok){
      const message = `An error has occured: ${response.status}`;
      throw new Error(message)
    }
    const cycles = await response.json();
    return cycles;
  }

  useEffect(() => {
    fetchCycles()
    .then((res) => setAvailableCycles(res))
    .catch((error) => console.log(error.message))
  }, [])

  const handleChangeNew = (e) => {
    e.preventDefault()
    const cycleIdToNumber = parseInt(e.target.value)
    setNewMovie({...newMovie,
      [e.target.name]: (e.target.name === "cycle_id" ? cycleIdToNumber : e.target.value)
    })
    console.log(newMovie) // one change behind but when submit its entire input
  }

  const handleCreate = () => {
    fetch(`/api/v1/movies/`, {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
        'X-CSRF-Token': csrfToken
      },
      body: JSON.stringify(newMovie)
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    })
    .catch((err) => {
      console.log(err.message)
    })
  }

  return (
    <div>
      <form onSubmit={handleCreate}>
          <div className='flex items-center'> {/* title */}
            <Label
              htmlFor="title" label="Título"
            />
            <Input
              type="text"
              name="title"
              defaultValue={newMovie.title}
              onChange={handleChangeNew}
            />
          </div>
          <div className='flex items-center'> {/* runtime */}
            <Label
              htmlFor="runtime" label="Duración"
            />
            <Input
              type="text"
              name="runtime"
              defaultValue={newMovie.runtime}
              onChange={handleChangeNew}
            />
          </div>
          <div className='flex items-center'> {/* director */}
            <Label
              htmlFor="director" label="Director"
            />
            <Input
              type="text"
              name="director"
              defaultValue={newMovie.director}
              onChange={handleChangeNew}
            />
          </div>
          <div className='flex items-center'> {/* Description */}
            <Label
              htmlFor="description" label="Descripción"
            />
            <Input
              type="text"
              name="description"
              defaultValue={newMovie.description}
              onChange={handleChangeNew}
            />
          </div>
          <div className='flex items-center'> {/* Quote */}
            <Label
              htmlFor="quote" label="Cita"
            />
            <Input
              type="text"
              name="quote"
              defaultValue={newMovie.quote}
              onChange={handleChangeNew}
            />
          </div>
          <div className='flex items-center'> {/* img url */}
            <Label
              htmlFor="img_url" label="Ingrese la URL de la portada"
            />
            <Input
              type="text"
              name="img_url"
              defaultValue={newMovie.img_url}
              onChange={handleChangeNew}
            />
          </div>
          <div className='flex items-center'> {/* year */}
            <Label
              htmlFor="year" label="Año de lanzamiento"
            />
            <Input
              type="text"
              name="year"
              defaultValue={newMovie.year}
              onChange={handleChangeNew}
            />
          </div>
{/* cycle select defautl option twice, doesnt change rn*/}
          <div className='flex items-center'> {/* year */}
            <Label
              htmlFor="cycle_id" label="Cycle"
            />
            <select name="cycle_id" onChange={handleChangeNew} className="shadow-sm bg-htmlForm-bg border border-htmlForm-border text-gray-cycle rounded-sm focus:ring-black focus:border-black block w-full m-2.5 p-2.5">
              <option value="" selected disabled hidden>Elige aqui</option>
              {availableCycles.map((cycle, index) => {
                return <option key={index} value={cycle.id}>{cycle.name}</option>
              })}
            </select>
          </div>

          <div> {/* session_name */} </div>
          <div> {/* hall_name */} </div>
          <SubmitButton label="Create now"/>
        </form>
    </div>
  )
}

export default MovieCreate
