import React, {useState} from 'react'
import Label from './label';
import Input from './input';
import SubmitButton from '../shared/SubmitButton';
import getDateObject from '../helpers/getDateObject';

function CycleCreate() {
  const csrfToken = document.querySelector("[name='csrf-token']").content

  let [newCycle, setNewCycle] = useState({
    name: "",
    description: "",
    quote: "e",
    img_url: "e",
    start_date: "2023-05-01T00:00:00.000Z",
    end_date: "2023-05-02T00:00:00.000Z",
    color: "green-cycle"
  })

  const handleChangeNew = (e) => {
    e.preventDefault()
    setNewCycle({...newCycle,
      [e.target.name]: e.target.value
    })
    console.log(newCycle) // one change behind but when submit its entire input
  }

  const handleCreate = () => {
    fetch(`/api/v1/cycles/`, {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
        'X-CSRF-Token': csrfToken
      },
      body: JSON.stringify(newCycle)
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
        <div className='flex items-center'> {/* Name */}
            <Label
              htmlFor="name" label="Nombre"
            />
            <Input
              type="text"
              name="name"
              value={newCycle.name}
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
              value={newCycle.description}
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
              defaultValue={newCycle.quote}
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
              defaultValue={newCycle.img_url}
              onChange={handleChangeNew}
            />
          </div>
          <div className='flex items-center'>{/* start date */}
            <Label
              htmlFor="start_date" label="Fecha initial"
            />
            <Input
              type="text"
              name="start_date"
              defaultValue={getDateObject(newCycle.start_date).day + "-" + getDateObject(newCycle.start_date).month + "-" + getDateObject(newCycle.start_date).year}
              onChange={handleChangeNew}
            />
          </div>
          <div className='flex items-center'>{/* end date */}
            <Label
              htmlFor="end_date" label="Fecha final"
            />
            <Input
              type="text"
              name="end_date"
              defaultValue={getDateObject(newCycle.end_date).day + "-" + getDateObject(newCycle.end_date).month + "-" + getDateObject(newCycle.end_date).year}
              onChange={handleChangeNew}
            />
          </div>
          <div className='flex items-center'> {/* color */}
            <Label
              htmlFor="color" label="Elige un color"
            />
            <select name="color" onChange={handleChangeNew} className="shadow-sm bg-htmlForm-bg border border-htmlForm-border text-gray-newCycle rounded-sm focus:ring-black focus:border-black block w-full m-2.5 p-2.5">
              {/* may need to put color in tailwind in spanish */}
              {/* <option selected value={newCycle.color}>{newCycle.color.split("-")[0]}</option> */}
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

          <div> {/* movies */} </div>
          <div> {/* sessions */} </div>
          <SubmitButton label="Create now"/>
        {/* <button type="submit">Create new now</button> */}
      </form>
    </div>
  )
}

export default CycleCreate
