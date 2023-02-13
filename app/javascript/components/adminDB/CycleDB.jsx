import React from 'react';
import Label from './label';
import Input from './input';
import SubmitButton from '../shared/SubmitButton';

function CycleDB() {
  return (
    <div>
      <h2 className='text-2xl'>Cycle</h2>
      <div className='justify-items-start mb-8'>
        <div className='flex items-center'> {/* Name */}
          <Label
            for="name" label="Nombre"
          />
          <Input
            type="text"
            id="name"
            defaultValue="name"
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
            defaultValue="description"
            placeholder=""
          />
        </div>
        <div className='flex items-center'> {/* Quote */}
          <Label
            for="quote" label="quote"
          />
          <Input
            type="text"
            id="quote"
            defaultValue="quote"
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
        <div className='flex items-center'>{/* start date & end date */}

        </div>
        <div className='flex items-center'> {/* color */}
          <Label
            for="color" label="Elige un color"
          />
          <Input
            type="text"
            id="color"
            defaultValue=""
          />
        </div>

        <div> {/* slug */} </div>
        <div> {/* movies */} </div>
        <div> {/* sessions */} </div>
        <SubmitButton label="Guardar"/>
      </div>
    </div>
  )
}

export default CycleDB
