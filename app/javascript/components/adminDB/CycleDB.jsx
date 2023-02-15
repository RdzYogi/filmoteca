import React, {useState} from 'react';
import Label from './label';
import Input from './input';
import SubmitButton from '../shared/SubmitButton';
import getDateObject from '../helpers/getDateObject';

function CycleDB(props) {
  const cycle = props.cycle
  // console.log(Object.keys(cycle))

  const [inputs, setInputs] = useState({})
  const handleChange = (event) => {
    const name = event.target.name;
    console.log(e)
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(cycle.name);
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
              id="name"
              defaultValue={cycle.name}
              placeholder=""
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
              defaultValue={cycle.description}
              placeholder=""
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
              defaultValue={cycle.quote}
              placeholder=""
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
              id="start_date"
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
              id="end_date"
              defaultValue={getDateObject(cycle.end_date).day + "-" + getDateObject(cycle.end_date).month + "-" + getDateObject(cycle.end_date).year}
              onChange={handleChange}
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
          {/* <SubmitButton label="guardar"/> */}
          <button type="submit" className="py-3 px-5 w-32 flex m-auto justify-center sm:m-0 font-medium text-center text-white rounded-sm bg-black hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-button-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default CycleDB



// const handleChange = (e) => {
//   e.preventDefault();
// }

// const handleSubmit = (e) => {
//   e.preventDefault();
// }

// const updateCycle = (e) => {
//   e.preventDefault();
//   return fetch(`/api/v1/cycles/${cycle.slug}`, {
//     method: "PATCH",
//     headers: {
//       "Content-type": "application/json"
//     },
//     body: JSON.stringify({cycle: cycle})
//    })
//   .then(response => {
//     return response.json();
//   })
//   .then((key, value) => {
//     setCycle((prevCycle) => ({ ...prevCycle, [key]: value }))
//   })
//   .catch((err) => {
//     console.log(err.message)
//   })
// }
