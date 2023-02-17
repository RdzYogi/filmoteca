import React, {useState} from 'react';
import Label from './label';
import Input from './input';
import SubmitButton from '../shared/SubmitButton';
import getDateObject from '../helpers/getDateObject';

function CycleDB(props) {
  const cycle = props.cycle
  const csrfToken = document.querySelector("[name='csrf-token']").content

  const [cycleValues, setCycleValues] = useState({
    id: cycle.id,
    name: cycle.name,
    description: cycle.description,
    quote: cycle.quote,
    img_url: cycle.img_url,
    start_date: cycle.start_date,
    end_date: cycle.end_date,
    color: cycle.color,
    slug: cycle.slug
  })

  const handleChange = (e) => {
    setCycleValues({...cycleValues,
      [e.target.name]: e.target.value
    })
    console.log(cycleValues) // one change behind but when submit its entire input
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
    fetch(`/api/v1/cycles/${cycleValues.slug}`, {
      method: 'PATCH',
      headers: {
        "Content-type": "application/json",
        'X-CSRF-Token': csrfToken
      },
      body: JSON.stringify(cycleValues)
    })
    console.log(cycleValues)
  }


  return (
    <div>
      <h2 className='text-2xl'>Cycle</h2>
      <div className='justify-items-start mb-8'>
        <form onSubmit={handleSubmit} >
          <div className='flex items-center'> {/* Name */}
            <Label
              htmlFor="name" label="Nombre"
            />
            <Input
              type="text"
              name="name"
              defaultValue={cycle.name}
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
              defaultValue={cycle.description}
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
              defaultValue={cycle.quote}
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
              defaultValue={cycle.img_url}
              onChange={handleChange}
            />
          </div>
          <div className='flex items-center'>{/* start date */}
            <Label
              htmlFor="start_date" label="Fecha initial"
            />
            <Input
              type="text"
              name="start_date"
              defaultValue={getDateObject(cycle.start_date).day + "-" + getDateObject(cycle.start_date).month + "-" + getDateObject(cycle.start_date).year}
              onChange={handleChange}
            />
          </div>
          <div className='flex items-center'>{/* end date */}
            <Label
              htmlFor="end_date" label="Fecha final"
            />
            <Input
              type="text"
              name="end_date"
              defaultValue={getDateObject(cycle.end_date).day + "-" + getDateObject(cycle.end_date).month + "-" + getDateObject(cycle.end_date).year}
              onChange={handleChange}
            />
          </div>
          <div className='flex items-center'> {/* color */}
            <Label
              htmlFor="color" label="Elige un color"
            />
            <select name="color" className="shadow-sm bg-htmlForm-bg border border-htmlForm-border text-gray-cycle rounded-sm focus:ring-black focus:border-black block w-full m-2.5 p-2.5">
              {/* may need to put color in tailwind in spanish */}
              {/* <option selected value={cycle.color}>{cycle.color.split("-")[0]}</option> */}
              {/* otherwise choose here option on row 84 */}
              {/* <option value="" selected disabled hidden>Elige aqui</option> */}
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
          <SubmitButton label="guardar"/>
        </form>
      </div>
    </div>
  )
}

export default CycleDB
