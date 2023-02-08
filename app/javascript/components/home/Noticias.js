import React, { useState, useEffect } from "react";

function Noticias() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:3000/api/v1/news")
      .then((response) => response.json())
      .then((data) => {
        setNews(data.slice(0, 3));
      });
  }, []);

  useEffect(() => {
    console.log(news);
  }, [news]);

  return (
    <div className="w-1/3 p-3">
      {/* Download button TODO: implement download button shared component*/}

      <button className="bg-blue-500 text-white p-2">Descargar Programa</button>

      {/* Noticias section */}

      {/* TODO: add date to card. Create link to news index  */}

      <h3 className="p-2 text-center font-bold text-2xl">Noticias</h3>
      {news.map((news) => (
        <div className="flex justify-between p-2">
          <img
            src="https://source.unsplash.com/h7rOzTmGxWE"
            width={125}
            height={125}
            className="p-2"
          />
          <div>
            <p className="p-1">16-12-2022</p>
            <h5 className="p-1">{news.title}</h5>
            <p className="p-1 ">{news.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Noticias;
