import React from 'react';
import Label from './label';
import Input from './input';
import SubmitButton from '../shared/SubmitButton';
import getDateObject from '../helpers/getDateObject';

function CycleDB(props) {
  const cycle = props.cycle
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
            htmlFor="img_url" label="Ingrese la URL de la portada"
          />
          <Input
            type="text"
            id="img_url"
            defaultValue={cycle.img_url}
          />
        </div>
        <div className='flex items-center'>{/* start date */}
          <Label
            htmlFor="start_date" label="Fecha initial"
          />
          <Input
            type="text"
            id="start_date"
            defaultValue={getDateObject(cycle.start_date).day + "-" + getDateObject(cycle.start_date).month + "-" + getDateObject(cycle.start_date).year}
          />
        </div>
        <div className='flex items-center'>{/* end date */}
          <Label
            htmlFor="end_date" label="Fecha final"
          />
          <Input
            type="text"
            id="end_date"
            defaultValue={getDateObject(cycle.end_date).day + "-" + getDateObject(cycle.end_date).month + "-" + getDateObject(cycle.end_date).year}
          />
        </div>
        <div className='flex items-center'> {/* color */}
          <Label
            htmlFor="color" label="Elige un color"
          />
          <select id="color" className="shadow-sm bg-htmlForm-bg border border-htmlForm-border text-gray-cycle rounded-sm focus:ring-black focus:border-black block w-full m-2.5 p-2.5">
            {/* may need to put color in tailwind in spanish */}
            {/* <option selected value={cycle.color}>{cycle.color.split("-")[0]}</option> */}
            {/* otherwise choose here option on row 84 */}
            <option value="" selected disabled hidden>Elige aqui</option>
            <option value="green-cycle">Verde</option>
            <option value="blue-cycle">Azul</option>
            <option value="aqua-cycle">Turquesa</option>
            <option value="yellow-cycle">Amarillo</option>
            <option value="purple-cycle">Morada</option>
            <option value="red-cycle">Rojo</option>
            <option value="gray-cycle">Gris</option>
            <option value="pink-cycle">Rosa</option>
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