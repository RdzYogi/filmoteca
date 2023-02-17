import React, {useState} from 'react'
import Label from './label'
import Input from './input'
import SubmitButton from '../shared/SubmitButton';

function MovieDB(props) {
  const movie = props.movie.movie

  const [movieValues, setMovieValues] = useState({
    id: movie.id,
    title: movie.title,
    runtime: movie.runtime,
    director: movie.director,
    description: movie.description,
    quote: movie.quote,
    img_url: movie.img_url,
    year: movie.year,
    slug: movie.slug
  })

  const handleChange = (e) => {
    setMovieValues({...movieValues,
      [e.target.name]: e.target.value
    })
    console.log(movieValues) // one change behind but when submit its entire input
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
    fetch(`/api/v1/cycles/${movieValues.slug}`, {
      method: 'PATCH',
      headers: {
        "Content-type": "application/json",
        'X-CSRF-Token': token
      },
      body: JSON.stringify(movieValues)
    })
    console.log(movieValues)
  }

  return (
    <div>
      <h2 className='text-2xl'>Movie</h2>
      <div className='justify-items-start'>
        <form onSubmit={handleSubmit}>
          <div className='flex items-center'> {/* title */}
            <Label
              htmlFor="title" label="Título"
            />
            <Input
              type="text"
              id="title"
              defaultValue="Título"
              onChange={handleChange}
            />
          </div>
          <div className='flex items-center'> {/* runtime */}
            <Label
              htmlFor="runtime" label="Duración"
            />
            <Input
              type="text"
              id="runtime"
              defaultValue="Duración"
              onChange={handleChange}
            />
          </div>
          <div className='flex items-center'> {/* director */}
            <Label
              htmlFor="director" label="Director"
            />
            <Input
              type="text"
              id="director"
              defaultValue="Director"
              onChange={handleChange}
            />
          </div>
          <div className='flex items-center'> {/* Description */}
            <Label
              htmlFor="description" label="Descripción"
            />
            <Input
              type="text"
              id="description"
              defaultValue="Descripción"
              onChange={handleChange}
            />
          </div>
          <div className='flex items-center'> {/* Quote */}
            <Label
              htmlFor="quote" label="Cita"
            />
            <Input
              type="text"
              id="quote"
              defaultValue="Cita"
              onChange={handleChange}
            />
          </div>
          <div className='flex items-center'> {/* img url */}
            <Label
              htmlFor="img_url" label="Ingrese la URL de la portada"
            />
            <Input
              type="text"
              id="img_url"
              defaultValue=""
              onChange={handleChange}
            />
          </div>
          <div className='flex items-center'> {/* year */}
            <Label
              htmlFor="year" label="Año de lanzamiento"
            />
            <Input
              type="text"
              id="year"
              defaultValue="Año"
              onChange={handleChange}
            />
          </div>

          <div> {/* slug */} </div>
          <div> {/* cycle_id */} </div>
          <div> {/* session_id */} </div>
          <div> {/* hall_id */} </div>
          <SubmitButton label="Guardar"/>
        </form>
      </div>
    </div>
  )
}

export default MovieDB
