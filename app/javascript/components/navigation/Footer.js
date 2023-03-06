import React from 'react';
// import logo_blanco from '../../assets/images/logo-blanco.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faTelegram, faVimeo, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGlobe} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

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
  cafeteria: [
    { name: 'Cafetería:'},
    { name: 'Martes a Domingo: 16:00 a 22:30'},
  ],
  libreria: [
    { name: 'Librería:'},
    { name: 'Martes a Domingo: 11:30 a 14:30 - 17:00 a 21:00'},
  ],
  support: [
    { name: 'Contact', href: '/contacto' },
  ],
  company: [
    { name: 'Condiciones de compra', href: '/' },
    { name: 'Quejas y sugerencias', href: '/' },
    { name: 'Politica de privacidad', href: '/' },
    { name: 'Normas de acceso cine Doré', href: '/' },
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
      <div className="xl:ml-4 px-12 py-4">
        <img
          src="https://res.cloudinary.com/drz3yyvjm/image/upload/v1677832685/Filmoteca/logo-blanco_dvzj5o.png"
          alt="logo filmoteca"
          width={420}
          height={360}
          className=""/>
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-3 gap-4 p-4 grid-cols-2">
        <div>
          <div className="xl:ml-12">
                {navigation.address.map((item) =>(
                  <p key={item.value} className="text-xs text-gray-50 pt-2 truncate ...">
                    {item.value}
                  </p>
                ))}
          </div>
        </div>
        <div>
          <h3 className="text-base font-medium text-gray-50">Filmoteca Española</h3>
            <ul role="list">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-xs text-gray-50">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
        </div>
        <div>
          <div>
            {navigation.cafeteria.map((item) => (
              <p key={item.name} className="text-xs text-gray-50">
                  {item.name}
                </p>
            ))}
          </div>
          <div className="mt-5">
            {navigation.libreria.map((item) => (
              <p key={item.name} className="text-xs text-gray-50">
                  {item.name}
                </p>
            ))}
          </div>
          <div className="mt-3">
            <div className="grid grid-cols-3 md:w-1/2">
              {/* <div className="grid grid-cols-3 gap-y-0 gap-x-0"> */}
                <a href="https://www.facebook.com/FilmotecaES" className=' text-3xl text-gray-50' ><FontAwesomeIcon icon={faFacebookF}/></a>
                <a href="https://twitter.com/Filmoteca_es" className='text-3xl text-gray-50' ><FontAwesomeIcon icon={faTwitter}/></a>
                <a href="https://t.me/filmoteca_es" className='text-3xl text-gray-50' ><FontAwesomeIcon icon={faTelegram}/></a>
              {/* </div>
              <div className="flex-auto "> */}
                <a href="https://www.instagram.com/filmotecaes" className='text-3xl text-gray-50' ><FontAwesomeIcon icon={faInstagram}/></a>
                <a href="https://vimeo.com/filmotecaespanola" className='text-3xl text-gray-50' ><FontAwesomeIcon icon={faVimeo}/></a>
                <a href="#" className='text-3xl text-gray-50' ><FontAwesomeIcon icon={faGlobe}/></a>
              </div>
          </div>
        </div>
      </div>
        <div className="border-t border-gray-200 p-3">
          <p className="sm:text-xs xl:text-base text-gray-400 text-center">&copy; 2023 Code Rabbits, Inc. All rights reserved.</p>
        </div>
      </footer>
  )
}


export default Footer
