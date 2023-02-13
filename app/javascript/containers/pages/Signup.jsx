import React from 'react'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'

function Signup() {
  return (
  <Layout>
    <Navbar/>
    <div className='pt-40 p-4 max-w-7xl mx-auto pb-1 my-6 md:px-12 text-justify'>
      <section className="bg-white">
        <h2 className="text-center text-2xl font-bold">REGISTRO</h2>
        <p className="mb-4 font-light text-left text-gray-cycle">Los campos marcados * son obligatorios.</p>
        <form action="#" className="space-y-8">
            <div>
                <label for="name" className="block mb-2 font-medium text-black">Nombre</label>
                <input type="text" id="name" className="shadow-sm bg-form-bg border border-form-border text-gray-cycle rounded-sm focus:ring-black focus:border-black block w-full p-2.5" required />
            </div>
            <div>
                <label for="firstName" className="block mb-2 font-medium text-black">Primer apellido</label>
                <input type="text" id="firstName" className="shadow-sm bg-form-bg border border-form-border text-gray-cycle rounded-sm focus:ring-black focus:border-black block w-full p-2.5" required />
            </div>
            <div>
                <label for="lastName" className="block mb-2 font-medium text-black">Segundo apellido</label>
                <input type="text" id="lastName" className="shadow-sm bg-form-bg border border-form-border text-gray-cycle rounded-sm focus:ring-black focus:border-black block w-full p-2.5" />
            </div>
            <div className='flex justify-between'> {/*emails div flex*/}
              <div className='w-1/2 mr-2'>
                  <label for="email" className="block mb-2 font-medium text-black">Correo electrónico</label>
                  <input type="email" id="email" className="shadow-sm bg-form-bg border border-form-border text-gray-cycle rounded-sm focus:ring-black focus:border-black block w-full p-2.5" placeholder="Ingresa tu correo" required />
              </div>
              <div className='w-1/2 ml-2'>
                  <label for="email-confirmation" className="block mb-2 font-medium text-black">Repita su correo</label>
                  <input type="email" id="email-confirmation" className="shadow-sm bg-form-bg border border-form-border text-gray-cycle rounded-sm focus:ring-black focus:border-black block w-full p-2.5" placeholder="Ingresa tu correo" required />
              </div>
            </div>
            <div className='flex justify-between'>
              <div className='w-1/2 ml-2'>
                <label for="password" className="block mb-2 font-medium text-black">Contraseña</label>
                <input type="password" id="password" className="shadow-sm bg-form-bg border border-form-border text-gray-cycle rounded-sm focus:ring-black focus:border-black block w-full p-2.5" placeholder="Crea una contraseña" required />
              </div>
              <div className='w-1/2 ml-2'>
                  <label for="passwordConfirmation" className="block mb-2 font-medium text-black">Contraseña</label>
                  <input type="password" id="passwordConfirmation" className="shadow-sm bg-form-bg border border-form-border text-gray-cycle rounded-sm focus:ring-black focus:border-black block w-full p-2.5" placeholder="Repite tu contraseña" required />
              </div>
            </div>
            <div className='w-1/2 ml-2'>
                <label for="typeOfDocument" className="block mb-2 font-medium text-black">Tipo de documento</label>
                <input type="text" id="typeOfDocument" className="shadow-sm bg-form-bg border border-form-border text-gray-cycle rounded-sm focus:ring-black focus:border-black block w-full p-2.5" placeholder="DNI" />
            </div>
            <div className='w-1/2 ml-2'>
                <label for="document" className="block mb-2 font-medium text-black">Documento</label>
                <input type="text" id="document" className="shadow-sm bg-form-bg border border-form-border text-gray-cycle rounded-sm focus:ring-black focus:border-black block w-full p-2.5" />
            </div>
            <div className='w-1/2 ml-2'>
                <label for="postcode" className="block mb-2 font-medium text-black">Código póstal</label>
                <input type="text" id="postcode" className="shadow-sm bg-form-bg border border-form-border text-gray-cycle rounded-sm focus:ring-black focus:border-black block w-full p-2.5" />
            </div>
            <div className='w-1/2 ml-2'>
                <label for="birthday" className="block mb-2 font-medium text-black">Código póstal</label>
                <input type="date" id="birthday" className="shadow-sm bg-form-bg border border-form-border text-gray-cycle rounded-sm focus:ring-black focus:border-black block w-full p-2.5" placeholder='dd/mm/yyyy'/>
            </div>
            <p>INFORMACIÓN BÁSICA SOBRE PROTECCIÓN DE DATOS : En cumplimiento del Reglamento General de Protección de Datos, le informamos de que sus datos serán incorporados al tratamiento Venta de entradas y abonos , cuya finalidad es la gestión del servicio de venta de entradas, de abonos y la comunicación de incidencias e información de interés directamente relacionada con la actividad de tratamiento. El responsable de este tratamiento es la FILMOTECA ESPAÑOLA ante la que se podrán ejercer los derechos de acceso, rectificación, limitación del tratamiento, portabilidad de los datos, oposición y a no ser objeto de decisiones individualizadas, cuando procedan. Puede consultar la información adicional y detallada sobre la protección de sus datos en nuestra página web </p>
            <div class="flex items-center mb-4">
              <input id="conditions" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 " />
              <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">He leído y estoy de acuerdo con la cláusula de consentimiento para el tratamiento de datos personales de la Filmoteca Española</label>
            </div>
            <button type="submit" className="py-3 px-5 w-32 flex m-auto justify-center sm:m-0 font-medium text-center text-white rounded-sm bg-button-submit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-button-submit">Enviar</button>
        </form>
      </section>
    </div>
    <Footer/>
  </Layout>
  )
}

export default Signup
