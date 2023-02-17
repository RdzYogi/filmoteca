import React, {useState} from 'react'
import Label from './label'
import Input from './input'
import SubmitButton from '../shared/SubmitButton';

function MovieDB(props) {
  const movie = props.movie.movie
  const csrfToken = document.querySelector("[name='csrf-token']").content

  const [movieValues, setMovieValues] = useState({
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
    fetch(`/api/v1/movies/${movieValues.slug}`, {
      method: 'PATCH',
      headers: {
        "Content-type": "application/json",
        'X-CSRF-Token': csrfToken
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
              name="title"
              defaultValue={movie.title}
              onChange={handleChange}
            />
          </div>
          <div className='flex items-center'> {/* runtime */}
            <Label
              htmlFor="runtime" label="Duración"
            />
            <Input
              type="text"
              name="runtime"
              defaultValue={movie.runtime}
              onChange={handleChange}
            />
          </div>
          <div className='flex items-center'> {/* director */}
            <Label
              htmlFor="director" label="Director"
            />
            <Input
              type="text"
              name="director"
              defaultValue={movie.director}
              onChange={handleChange}
            />
          </div>
          <div className='flex items-center'> {/* Description */}
            <Label
              htmlFor="description" label="Descripción"
            />
            <Input
              type="text"
              name="description"
              defaultValue={movie.description}
              onChange={handleChange}
            />
          </div>
          <div className='flex items-center'> {/* Quote */}
            <Label
              htmlFor="quote" label="Cita"
            />
            <Input
              type="text"
              name="quote"
              defaultValue={movie.quote}
              onChange={handleChange}
            />
          </div>
          <div className='flex items-center'> {/* img url */}
            <Label
              htmlFor="img_url" label="Ingrese la URL de la portada"
            />
            <Input
              type="text"
              name="img_url"
              defaultValue={movie.img_url}
              onChange={handleChange}
            />
          </div>
          <div className='flex items-center'> {/* year */}
            <Label
              htmlFor="year" label="Año de lanzamiento"
            />
            <Input
              type="text"
              name="year"
              defaultValue={movie.year}
              onChange={handleChange}
            />
          </div>

          <div> {/* slug */} </div>
          <div> {/* cycle_name */} </div>
          <div> {/* session_name */} </div>
          <div> {/* hall_name */} </div>
          <SubmitButton label="Guardar"/>
        </form>
      </div>
    </div>
  )
}

export default MovieDB
