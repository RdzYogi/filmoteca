import React, { useState } from 'react';
import getDateObject from '../helpers/getDateObject';

function NewsCard(props) {

  const noticia = props.noticia

  const showDateString = noticia.created_at

  const options = {monthLong: false}
  const showDateObject = getDateObject(showDateString, options)

  return (
    <div className="flex bg-gray-300">
      <div>
        <img className="object-cover w-60 h-40 pr-1" src="https://res.cloudinary.com/drz3yyvjm/image/upload/v1676301246/Filmoteca/Embrujo_hre7a8.jpg"/>  {/*delete later*/}
      </div>
      <div>
        <p className="text-base">{showDateObject.day}/{showDateObject.month}/{showDateObject.year}</p>
        <p className="text-base font-bold">{noticia.title}</p>
        <p>{noticia.description}</p>
      </div>
    </div>
  );
}

export default NewsCard
