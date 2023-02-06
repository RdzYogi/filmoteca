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
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-black-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-250 ease-in-out"
          >
            Atras
          </button>
      </div>
      <div className="pl-50">
          <h2 className="text-xl font-large text-black-900 text-align-center">
            EL PADRINO
          </h2>
          <h3 className="mb-1 text-sm text-primary-500">
            Frank Ford Coppola • <time>18 Nov 2022</time>
          </h3>
          <p className="mt-auto max-w-md text-black-500 text-justify">
            América, años 40. Don Vito Lattanzio (Marlon Brando) es el respetado y temido jefe de una de las cinco familias de la mafia de Nueva York. Tiene cuatro hijos: Connie (Talia Shire), el impulsivo Sonny (James Caan), el pusilánime Fredo (John Cazale) y Michael (Al Pacino), que no quiere saber nada de los negocios de su padre. Cuando Corleone, en contra de los consejos de 'Il consigliere' Tom Hagen (Robert Duvall), se niega a participar en el negocio de las drogas, el jefe de otra banda ordena su asesinato. Empieza entonces una violenta y cruenta guerra entre las familias mafiosas
          </p>
        </div>
        <div className= "container px-50 color-green"></div>
        <div className="col-start-1 mt-auto max-w-md justify-left bg-green-600">"nombre del ciclo"</div>
      </div>
      <div className="mt-auto max-w-md object-left">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.uitsSnPKJpMu5OxK6_xLZwHaFG%26pid%3DApi&f=1&ipt=6c6ac4cd4d5bd849d8f3810c64a10547f59ee3e1b4a08c9112a4d6fa669745d7&ipo=images"
          className="aspect-video w-full object-cover"
          alt=""
        />
        </div>

      <Footer />
    </Layout>
  );
}

export default Movie;
