import React, { useEffect, useState } from 'react'
import Layout from '../../hocs/layouts/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import PopUp from '../../components/shared/PopUp';


function Contacto() {

  const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,'g')

  const [formInfo, setFormInfo] = useState({
    name: '',
    email: '',
    emailConfirmation: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState([])

  const handleChange = (e) => {
    // console.log(e.target.id)
    switch (e.target.id) {
      case "name":
        setFormInfo({...formInfo, name: e.target.value})
        break;
      case "email":
        setFormInfo({...formInfo, email: e.target.value})
        break;
      case "emailConfirmation":
        setFormInfo({...formInfo, emailConfirmation: e.target.value})
        break;
      case "subject":
        setFormInfo({...formInfo, subject: e.target.value})
        break;
      case "message":
        setFormInfo({...formInfo, message: e.target.value})
        break;

      default:
        break;
    }
  }
  const handleClick = (e) => {
    e.preventDefault()
    // console.log(formInfo)
    const error = []
    Object.keys(formInfo).forEach(key => {
      const element = document.getElementById(key)
      if (formInfo[key] === '' || formInfo[key] === 'Elige un asunto') {
        element.classList.add('border-red-500')
        error.push(key)
      } else {
        element.classList.remove('border-red-500')
      }
    })
    if (!emailRegex.test(formInfo.email)) {
      const element = document.getElementById('email')
      element.classList.add('border-red-500')
      error.push('emailNotValid')
    }
    if (formInfo.email !== formInfo.emailConfirmation) {
      const element = document.getElementById('emailConfirmation')
      element.classList.add('border-red-500')
      error.push('notSameEmails')
    }
    // centerPrompt()
    if(error.length > 0){
      setStatus(error)
      return
    }
    const messageToSend = {message: formInfo}
    fetch('/api/v1/messages', {
      method: "POST",
      headers: { "Content-Type": "application/json",},
      body: JSON.stringify(messageToSend),
    })
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw new Error("Network response was not ok.")
    })
    .then((response) => {
      setStatus([response.message])
      if(response.message === 'Message sent successfully') document.getElementById('form').reset()
      setFormInfo({
        name: '',
        email: '',
        emailConfirmation: '',
        subject: '',
        message: '',
      })
    })
  }

  return (
    <Layout>
      <div className='pt-40 p-4 max-w-7xl mx-auto pb-1 my-6 md:px-12 text-justify'>
        <section className="bg-white relative">
          <PopUp status={status} />
          <h2 className="text-center text-2xl font-bold">CONTACTO</h2>
          <p className="my-8 font-light text-gray-cycle lg:text-center">Estamos encantados de ayudarle. Por favor envíenos cualquier pregunta, comentario o incidencia.</p>
          <p className="mb-4 font-light text-left text-gray-cycle">Todos los campos son obligatorios.</p>
          <form id={"form"} action="#" className="space-y-8">
              <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-black">Nombre</label>
                  <input onChange={handleChange} type="text" id="name" className="shadow-sm bg-form-bg border border-form-border text-gray-cycle rounded-sm focus:ring-black focus:border-black block w-full p-2.5" placeholder="Ingresa tu nombre" required />
              </div>
              <div className='flex justify-between'> {/*emails div flex*/}
                <div className='w-1/2 mr-2'>
                    <label htmlFor="email" className="block mb-2 font-medium text-black">Correo electrónico</label>
                    <input onChange={handleChange} type="email" id="email" className="shadow-sm bg-form-bg border border-form-border text-gray-cycle rounded-sm focus:ring-black focus:border-black block w-full p-2.5" placeholder="Ingresa tu correo" required />
                </div>
                <div className='w-1/2 ml-2'>
                    <label htmlFor="emailConfirmation" className="block mb-2 font-medium text-black">Repita su correo</label>
                    <input onChange={handleChange} type="email" id="emailConfirmation" className="shadow-sm bg-form-bg border border-form-border text-gray-cycle rounded-sm focus:ring-black focus:border-black block w-full p-2.5" placeholder="Ingresa tu correo" required />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium text-black">Asunto</label>
                <select onChange={handleChange} id="subject" className="block p-3 w-full text-black bg-form-bg rounded-sm border border-form-border shadow-sm focus:ring-black focus:border-black" >
                  <option defaultValue>Elige un asunto</option>
                  <option value="pregunta">Pregunta</option>
                  <option value="comentario">Comentario</option>
                  <option value="error">Error en la información</option>
                  <option value="incidenciaReclamacion">Incidencia o reclamación</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                  <label htmlFor="message" className="block mb-2 font-medium text-black">Su mensaje</label>
                  <textarea onChange={handleChange} id="message" rows="6" className="block p-2.5 w-full text-black bg-form-bg rounded-sm shadow-sm border border-form-border focus:ring-black focus:border-black" placeholder="Mensaje" required ></textarea>
              </div>
              {/* <ReCAPTCHA sitekey="6LcEpb4kAAAAAHI7yvtKQFviAXfXjox159hHoJnA" onChange={onChange}/> */}

              <button type='submit' onClick={handleClick} className="py-3 px-5 w-32 flex m-auto justify-center sm:m-0 font-medium text-center text-white rounded-sm transition duration-300 ease-in-out bg-button-submit hover:bg-blue-500">Enviar</button>
          </form>
        </section>
        <div className='flex items-center mt-6'>
          <FontAwesomeIcon icon={faPhone} />
          <p className='ml-4'>Para cuestiones urgentes, favor de contactar a través del número 902 044 414 para hablar con el equipo de soporte.</p>
        </div>
      </div>
    </Layout>
  )
}

export default Contacto
