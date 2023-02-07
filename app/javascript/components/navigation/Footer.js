import React from 'react';
import logo_blanco from '../../assets/images/logo-blanco.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const navigation = {
  address:[
    {value: 'Calle Santa Isabel, 3'},
    {value: '28012 Madrid'},
    {value: 'FilmotecaEspanola@taquillaunica.es'},
    {value: '+34 913 693 225'},
    {value: '+34 913 691 125 (taquilla)'},
    {value: '+34 913 692 118(gerencia)'},
  ],
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  hours: [
    { name: 'Cafetería:'},
    { name: 'Martes a Domingo: 16:00 a 22:30'},
    { name: 'Librería:'},
    { name: 'Martes a Domingo: 11:30 A 14:30 H - 17:00 A 21:00H'},
  ],
  support: [
    { name: 'Contact', href: '/contacto' },
  ],
  company: [
    { name: 'Condiciones de compra', href: '/' },
    { name: 'Quejas y sugerencias', href: '/' },
    { name: 'Politica de privacidad', href: '/' },
    { name: 'Nueva normas de acceso al cine Dore', href: '/' },
    { name: 'Recogida de entradas', href: '#' },
  ],
  legal: [
    { name: 'Faq', href: '#' },
    { name: 'Contacto', href: '#' },
    { name: 'Recogida de entradas', href: '#' },
  ]
}

function Footer() {
  return (
    <footer className="bg-black" aria-labelledby="footer-heading">
        <div className="mx-auto max-w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div>{/* <div className="xl:col-span-1"> */}
            <img
              src={logo_blanco}
              alt="logo"
              width={420}
              height={360}
              className=""/>
          </div>
        <div className="mt-8 grid grid-cols-1 gap-8 xl:grid-cols-2">
            <div className='mt-5 justify-between'>
                  <div>
                    {navigation.address.map((item) =>(
                      <p key={item.value} className="text-xs text-gray-50">
                        {item.value}
                      </p>
                    ))}
            </div>
        <div className="mt-12 grid grid-cols-3 gap-8 xl:col-1 xl:mt-0">
            <div>
              <h3 className="text-base font-medium text-gray-900">Filmoteca Española</h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 grid grid-cols-2 xl:col-2 xl:mt-0">
                <div>
                  {navigation.hours.map((item) => (
                    <p key={item.name} className="text-xs text-gray-50">
                        {item.name}
                      </p>
                  ))}
                </div>
                <div className="flex space-x-3 ">
                  <FontAwesomeIcon icon={faCoffee} color="green" />
                </div>
              </div>
            </div>
        </div>
          </div>
      </div>
            <div className="mt-12 border-t border-gray-200 pt-8">
              <p className="text-base text-gray-400 xl:text-center">&copy; 2023 Code Rabbits, Inc. All rights reserved.</p>
            </div>
      </footer>
  )
}


export default Footer
