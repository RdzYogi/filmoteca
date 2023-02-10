import React from 'react'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons'

function Contacto() {
  return (
    <Layout>
      <Navbar/>
      <div className='pt-40 p-4 max-w-7xl mx-auto pb-1 my-6 md:px-12 text-justify'>
        <section className="bg-white dark:bg-gray-900">
          <h2 className="text-center text-2xl font-bold">CONTACTO</h2>
          <p className="my-8 font-light text-gray-500 dark:text-gray-400 lg:text-center">Estamos encantados de ayudarle. Por favor envíenos cualquier pregunta, comentario o incidencia.</p>
          <p className="mb-4 font-light text-left text-gray-500 dark:text-gray-400 ">Todos los campos son obligatorios.</p>
          <form action="#" className="space-y-8">
              <div>
                  <label for="name" className="block mb-2 font-medium text-gray-900 dark:text-gray-300">Nombre</label>
                  <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Ingresa tu nombre" required />
              </div>
              <div className='flex justify-between'> {/*emails div flex*/}
                <div className='w-1/2 mr-2'>
                    <label for="email" className="block mb-2 font-medium text-gray-900 dark:text-gray-300">Correo electrónico</label>
                    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Ingresa tu correo" required />
                </div>
                <div className='w-1/2 ml-2'>
                    <label for="email-confirmation" className="block mb-2 font-medium text-gray-900 dark:text-gray-300">Repita su correo</label>
                    <input type="email" id="email-confirmation" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Ingresa tu correo" required />
                </div>
              </div>
              <div>
                <label for="subject" className="block mb-2 font-medium text-gray-900 dark:text-gray-300">Asunto</label>
                <select id="asunto" className="block p-3 w-full text-gray-900 bg-gray-50 rounded-sm border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light">
                  <option selected>Elige un asunto</option>
                  <option value="pregunta">Pregunta</option>
                  <option value="commentario">Commentario</option>
                  <option value="error">Error en la informactión</option>
                  <option value="incidenciaReclamacion">Incidencia o reclamación</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                  <label for="message" className="block mb-2 font-medium text-gray-900 dark:text-gray-400">Your message</label>
                  <textarea id="message" rows="6" className="block p-2.5 w-full text-gray-900 bg-gray-50 rounded-sm shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Mensaje"></textarea>
              </div>
              <button type="submit" className="py-3 px-5 w-32 flex m-auto justify-center sm:m-0 font-medium text-center text-white rounded-sm bg-button-submit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Enviar</button>
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
