import React from "react";

export default function Noticias() {
  return (
    <div className="w-1/3 pr-5">
      <button className="bg-blue-500 text-white p-2">Descargar Programa</button>
      <h3 className="p-2 text-center">Noticias</h3>
      <div className="flex justify-between">
        <img
          src="https://source.unsplash.com/h7rOzTmGxWE"
          width={200}
          height={200}
          className=""
        />
        <div>
          <p className="p-2">16-12-2022</p>
          <h5 className="p-2">Title news</h5>
          <p className="p-2 ">
            La Filmoteca Española, organismo encargado de la preservación del
            patrimonio cinematográfico español dependiente del...
          </p>
        </div>
      </div>
    </div>
  );
}
