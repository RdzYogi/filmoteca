import React from "react";
import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import Layout from "../../hocs/layouts/Layout";

function Movie() {
  return (
    <Layout>
      <Navbar />
      <div className="pt-40">
        <div className="flex space-x-2 justify-left">
        <button className="inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-black-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-250 ease-in-out">
            Atras
        </button>
        </div>
        <div className="container m-5">
          <div className="text-xl font-large text-black-900 m-2">
            <div className="float-right h-80 w-80 bg-gray-400">
              <h2 className="m-5 text-sm text-white underline font-bold">PASES</h2>
                <ul className="list-disc m-5 text-sm text-white">
                  <li>SALA 1</li>
                    <li>FECHA</li>
                    <li>HORA</li>
                  </ul>
          <button className="inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-black-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-250 ease-in-out">
            Comprar
          </button>
          <ul className="list-disc m-5 text-sm text-white">
                  <li>SALA 1</li>
                    <li>FECHA</li>
                    <li>HORA</li>
                  </ul>
          <button className="inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-black-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-250 ease-in-out">
            Comprar
          </button>
          </div>
          <h2 className="m-5 pt-20 text-2xl font-bold text-black-900">
            EL PADRINO
          </h2>
          <h3 className="m-5 text-sm text-primary-500">
            Frank Ford Coppola • <time>18 Nov 2022</time>
          </h3>
          <p className="m-5 max-w-2xl text-black-500 text-justify">
            América, años 40. Don Vito Corleone (Marlon Brando) es el respetado
            y temido jefe de una de las cinco familias de la mafia de Nueva
            York. Tiene cuatro hijos: Connie (Talia Shire), el impulsivo Sonny
            (James Caan), el pusilánime Fredo (John Cazale) y Michael (Al
            Pacino), que no quiere saber nada de los negocios de su padre.
            Cuando Corleone, en contra de los consejos de 'Il consigliere' Tom
            Hagen (Robert Duvall), se niega a participar en el negocio de las
            drogas, el jefe de otra banda ordena su asesinato. Empieza entonces
            una violenta y cruenta guerra entre las familias mafiosas.
          </p>
        </div>
        <div className="container px-50 color-green"></div>
        <div className="m-5 col-start-1 max-w-2xl justify-left bg-green-600">
          "nombre del ciclo"
        </div>
      </div>
      <div className="m-10 mt-auto max-w-2xl object-left aspect-video w-full object-cover">
        <img src="https://i1.wp.com/www.anim-arte.com/wp-content/uploads/2013/02/el-padrino.jpg?fit=1920%2C1080"
          className="aspect-video w-full object-cover" alt="Imagen El Padrino"/>
        <div className="m-5">
          <h2 className="pt-20 text-xl font-large font-bold text-black-900 m-2">
            MAS PELICULAS DEL CICLO
          </h2>
          <div className="pt-25 grid grid-cols-3 gap-6 w-xl h-60">
            <div className="col-span-1  bg-gray-400">Pelicula 1</div>
            <div className="col-span-1  bg-gray-400">Pelicula 2</div>
            <div className="col-span-1  bg-gray-400">Pelicula 3</div>
          </div>
        </div>
      </div>
      </div>

      <Footer />
    </Layout>
  );
}

export default Movie;
