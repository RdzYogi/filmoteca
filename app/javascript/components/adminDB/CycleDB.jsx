import React from 'react';
import Label from './label';
import Input from './input';
import SubmitButton from '../shared/SubmitButton';

function CycleDB(cycle) {
  return (
    <div>
      <h2 className='text-2xl'>Cycle</h2>
      <div className='justify-items-start mb-8'>
        <div className='flex items-center'> {/* Name */}
          <Label
            htmlFor="name" label="Nombre"
          />
          <Input
            type="text"
            id="name"
            defaultValue={cycle.name}
            placeholder=""
          />
        </div>
        <div className='flex items-center'> {/* Description */}
          <Label
            htmlFor="description" label="Descripción"
          />
          <Input
            type="text"
            id="description"
            defaultValue={cycle.description}
            placeholder=""
          />
        </div>
        <div className='flex items-center'> {/* Quote */}
          <Label
            htmlFor="quote" label="Cita"
          />
          <Input
            type="text"
            id="quote"
            defaultValue={cycle.quote}
            placeholder=""
          />
        </div>
        <div className='flex items-center'> {/* img url */}
          <Label
            htmlFor="img_url" label="Subir archivo"
          />
          <Input
            type="file"
            id="img_url"
            defaultValue={cycle.img_url}
          />
        </div>
        <div className='flex items-center'>{/* start date */}
          <Label
            htmlFor="start_date" label="Fecha initial"
          />
          <Input
            type="date"
            id="start_date"
            defaultValue={cycle.start_date}
          />
        </div>
        <div className='flex items-center'>{/* end date */}
          <Label
            htmlFor="end_date" label="Fecha final"
          />
          <Input
            type="date"
            id="end_date"
            defaultValue={cycle.end_date}
          />
        </div>
        <div className='flex items-center'> {/* color */}
          <Label
            htmlFor="color" label="Elige un color"
          />
          <select id="color" className="shadow-sm bg-htmlForm-bg border border-htmlForm-border text-gray-cycle rounded-sm focus:ring-black focus:border-black block w-full m-2.5 p-2.5">
            <option value="green-cycle">Green</option>
            <option value="blue-cycle">Blue</option>
            <option value="aqua-cycle">Aqua</option>
            <option value="yellow-cycle">Yellow</option>
            <option value="purple-cycle">Purple</option>
            <option value="red-cycle">Red</option>
            <option value="gray-cycle">Gray</option>
            <option value="pink-cycle">Pink</option>
          </select>
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
