import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import SubmitButton from '../../components/shared/SubmitButton';
import ReCAPTCHA from "react-google-recaptcha";


function Contacto() {
  const csrfToken = document.querySelector("[name='csrf-token']").content
  const onChange = () => {};
  useEffect(() => {
    fetch('/api/v1/mails', {
      method: 'POST',
      headers: {'Content-Type': 'application/json', "X-CSRF-Token": csrfToken},
    })
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
    })
    .then((data) => {
      console.log(data)
    });
    // fetch('/api/v1/mails')
    //   .then((response) => {
    //     return response.json()
    //   })
    //   .then((data) => {
    //     console.log(data)
    //   });
  }, [])
  return (
    <Layout>
      <Navbar/>
      <div className='pt-40 p-4 max-w-7xl mx-auto pb-1 my-6 md:px-12 text-justify'>
        <section className="bg-white">
          <h2 className="text-center text-2xl font-bold">CONTACTO</h2>
          <p className="my-8 font-light text-gray-cycle lg:text-center">Estamos encantados de ayudarle. Por favor envíenos cualquier pregunta, comentario o incidencia.</p>
          <p className="mb-4 font-light text-left text-gray-cycle">Todos los campos son obligatorios.</p>
          <form action="#" className="space-y-8">
              <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-black">Nombre</label>
                  <input type="text" id="name" className="shadow-sm bg-form-bg border border-form-border text-gray-cycle rounded-sm focus:ring-black focus:border-black block w-full p-2.5" placeholder="Ingresa tu nombre" required />
              </div>
              <div className='flex justify-between'> {/*emails div flex*/}
                <div className='w-1/2 mr-2'>
                    <label htmlFor="email" className="block mb-2 font-medium text-black">Correo electrónico</label>
                    <input type="email" id="email" className="shadow-sm bg-form-bg border border-form-border text-gray-cycle rounded-sm focus:ring-black focus:border-black block w-full p-2.5" placeholder="Ingresa tu correo" required />
                </div>
                <div className='w-1/2 ml-2'>
                    <label htmlFor="email-confirmation" className="block mb-2 font-medium text-black">Repita su correo</label>
                    <input type="email" id="email-confirmation" className="shadow-sm bg-form-bg border border-form-border text-gray-cycle rounded-sm focus:ring-black focus:border-black block w-full p-2.5" placeholder="Ingresa tu correo" required />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium text-black">Asunto</label>
                <select id="asunto" className="block p-3 w-full text-black bg-form-bg rounded-sm border border-form-border shadow-sm focus:ring-black focus:border-black" >
                  <option defaultValue>Elige un asunto</option>
                  <option value="pregunta">Pregunta</option>
                  <option value="comentario">Comentario</option>
                  <option value="error">Error en la información</option>
                  <option value="incidenciaReclamacion">Incidencia o reclamación</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                  <label htmlFor="message" className="block mb-2 font-medium text-black">Su mensaje</label>
                  <textarea id="message" rows="6" className="block p-2.5 w-full text-black bg-form-bg rounded-sm shadow-sm border border-form-border focus:ring-black focus:border-black" placeholder="Mensaje" required ></textarea>
              </div>
              <ReCAPTCHA sitekey="6LcEpb4kAAAAAHI7yvtKQFviAXfXjox159hHoJnA" onChange={onChange}/>
              <SubmitButton label="Enviar"/>
          </form>
        </section>
        <div className='flex items-center mt-6'>
          <FontAwesomeIcon icon={faPhone} />
          <p className='ml-4'>Para cuestiones urgentes, favor de contactar a través del número 902 044 414 para hablar con el equipo de soporte.</p>
        </div>
      </div>
      <Footer/>
    </Layout>
  )
}

export default Contacto
