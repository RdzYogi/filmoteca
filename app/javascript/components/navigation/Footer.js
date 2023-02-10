import React from 'react';
import logo_blanco from '../../assets/images/logo-blanco.png';
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
      <div className="ml-4 px-12 py-4">
        <img
          src={logo_blanco}
          alt="logo"
          width={420}
          height={360}
          className=""/>
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-3 md:grid-cols-2 gap-8 p-4">
        <div>
          <div className="xl:ml-12">
                {navigation.address.map((item) =>(
                  <p key={item.value} className="text-xs text-gray-50 pt-2">
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
            <div className="flex space-x-3 mt-3">
              <Link to="facebook.com/FilmotecaES/" className='text-3xl text-gray-50' >
                <FontAwesomeIcon icon={faFacebookF}/>
              </Link>
              <Link to="twitter.com/Filmoteca_es" className='text-3xl text-gray-50' >
                <FontAwesomeIcon icon={faTwitter}/>
              </Link>
              <Link to="t.me/filmoteca_es" className='text-3xl text-gray-50' >
                <FontAwesomeIcon icon={faTelegram}/>
              </Link>
            </div>
            <div className="flex space-x-3">
              <Link to="instagram.com/filmotecaes" className='text-3xl text-gray-50' >
                <FontAwesomeIcon icon={faInstagram}/>
              </Link>
              <Link to="vimeo.com/filmotecaespanola" className='text-3xl text-gray-50' >
                <FontAwesomeIcon icon={faVimeo}/>
              </Link>
              <Link to="#" className='text-3xl text-gray-50' >
                <FontAwesomeIcon icon={faGlobe}/>
              </Link>
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
