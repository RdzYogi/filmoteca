import React from 'react'
import Layout from '../../hocs/layouts/Layout'
import Ticket from '../../components/abonos/Ticket'

function Abonos() {
  return (
    <Layout>
      <div className="pt-40 max-w-7xl mt-6 mb-20 sm:mx-auto md:px-12 sm:px-6 px-4 text-justify">
        <h1 className='text-center text-2xl font-bold'>ABONOS Y TARIFAS</h1>
        <h2 className='font-bold text-lg mt-4'>Abono 10</h2>
        <p>Caduca en un año a partir de la fecha de compra y se podrá usar en un máximo de 6 entradas por sesión hasta finalizar las 10 entradas de las que dispone el abono.</p>
        <h2 className='font-bold text-lg mt-4'>Abono anual</h2>
        <p>Caduca en un año a partir de la fecha de compra y se podrá usar en sesiones ilimitadas con la restricción de un entrada por sesión.<br></br>La mala praxis del abono, mediante la reserva indiscriminada de butacas en diferentes sesiones sin hacer uso finalmente de ellas, podrá conllevar sanciones. A partir de la quinta ausencia de una butaca reservada por el mismo abono, Filmoteca Española se reserva el derecho de alertar al abonado y, en caso de reincidencia, podrá retirar su abono.<br></br>Se ruega un uso responsable del abono anual, es decir, ser consciente de que aquella entrada de la que no se haga uso podría ser la plaza de otro espectador que se ha quedado fuera. Gracias.</p>

        <div className='flex mt-4 mb-8 flex-col lg:flex-row'>
          <div id='tickets-normal' className='bg-slate-300 w-full lg:w-1/3 p-4 lg:mr-2 mb-5 lg:mb-0'>
            <Ticket name="ABONO 10" price="20€"/>
            <Ticket name="ABONO ANUAL" price="40€"/>
            <Ticket name="ENTRADA SENCILLA" price="3€"/>
          </div>
          <div id='tickets-discount' className='flex flex-col lg:flex-row bg-slate-300 w-full lg:w-2/3 p-4 lg:ml-2'>
            <p className='basis-1/2 lg:w-1/3 pr-4 m-auto text-left'>Estudiantes, miembros de familias numerosas, grupos culturales y educativos vinculados a instituciones, mayores de 65 años y personas en situación legal de desempleo:</p>
            <div className='lg:w-2/3'>
              <Ticket name="ABONO 10" price="15€"/>
              <Ticket name="ABONO ANUAL" price="30€"/>
              <Ticket name="ENTRADA SENCILLA" price="2€"/>
            </div>
          </div>
        </div>

        <h2 className='font-bold text-lg mt-4'>Exenciones de pago</h2>
        <ul>
          <li className='list-disc'>Menores de 18 años</li>
          <li className='list-disc'>Decreto Legislativo 1/2013, de 29 de noviembre, por el que se aprueba el Texto Refundido de la Ley General de derechos de las personas con discapacidad y de su inclusión social. También podrá acceder de forma gratuita la persona que lo acompañe, siempre y cuando sea imprescindible para que la persona con discapacidad pueda realizar su visita.</li>
          <li className='list-disc'>Donantes de fondos cinematográficos o fílmicos a la Filmoteca Española, mientras se ostente dicha condición.</li>
          <li className='list-disc'>Personal del Instituto de la Cinematografía y de las Artes Audiovisuales, así como las personas becarias o en prácticas, durante el período de duración de la beca o de las prácticas, respectivamente, en el organismo. Asimismo, personas jubiladas cuyo último destino antes de la jubilación hubiera sido en la Filmoteca Española, cualquiera que sea el régimen de acceso a la jubilación.</li>
        </ul>
      </div>
    </Layout>
  )
}

export default Abonos
