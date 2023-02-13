import React from 'react'
import Label from './label'
import Input from './input'
import SubmitButton from '../shared/SubmitButton';

function MovieDB() {
  return (
    <div>
      <h2 className='text-2xl'>Movie</h2>
      <div className='justify-items-start'>
        <div className='flex items-center'> {/* title */}
          <Label
            for="title" label="Título"
          />
          <Input
            type="text"
            id="title"
            defaultValue="Título"
            placeholder=""
          />
        </div>
        <div className='flex items-center'> {/* runtime */}
          <Label
            for="runtime" label="Duración"
          />
          <Input
            type="text"
            id="runtime"
            defaultValue="Duración"
            placeholder=""
          />
        </div>
        <div className='flex items-center'> {/* director */}
          <Label
            for="director" label="Director"
          />
          <Input
            type="text"
            id="director"
            defaultValue="Director"
            placeholder=""
          />
        </div>
        <div className='flex items-center'> {/* Description */}
          <Label
            for="description" label="Descripción"
          />
          <Input
            type="text"
            id="description"
            defaultValue="Descripción"
            placeholder=""
          />
        </div>
        <div className='flex items-center'> {/* Quote */}
          <Label
            for="quote" label="Quote"
          />
          <Input
            type="text"
            id="quote"
            defaultValue="Quote"
            placeholder=""
          />
        </div>
        <div className='flex items-center'> {/* img url */}
          <Label
            for="imgUrl" label="Subir archivo"
          />
          <Input
            type="file"
            id="imgUrl"
            defaultValue=""
          />
        </div>
        <div className='flex items-center'> {/* year */}
          <Label
            for="year" label="Año de lanzamiento"
          />
          <Input
            type="text"
            id="year"
            defaultValue="Año"
            placeholder=""
          />
        </div>

        <div> {/* slug */} </div>
        <div> {/* cycle_id */} </div>
        <div> {/* session_id */} </div>
        <div> {/* hall_id */} </div>
        <SubmitButton label="Guardar"/>
      </div>
    </div>
  )
}

export default MovieDB
