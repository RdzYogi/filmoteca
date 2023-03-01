import React from 'react'
import { Link } from 'react-router-dom';
import getCycleDuration from '../helpers/getCycleDuration';
import getDateObject from '../helpers/getDateObject';

function CycleCard(cycleData) {
  const cycle = cycleData.cycle

  // Convert string to date
  const startDate = cycle.start_date
  const endDate = cycle.end_date

  const dateOptions = {monthLong: true}
  const startDateObject = getDateObject(startDate,dateOptions)
  const endDateObject = getDateObject(endDate,dateOptions)

  const cycleDuration = getCycleDuration(startDateObject, endDateObject)


  return (
    <Link to={"/ciclos/" + cycle.slug} className={'text-center relative flex flex-col justify-between h-96 w-80 p-5 pb-0 ' + 'bg-'+cycle.color}>
      <div className='absolute right-36 top-44 -rotate-90'>
        <p className='w-80 text-xs'>CICLO CICLO CICLO CICLO CICLO CICLO CICLO</p>
      </div>
      <h1 className='text-xl font-bold leading-none'>{cycle.name}</h1>
      {/* If the year of the start is different from end we will display it */}
      {/* Also if the month is the same we only display it once */}
      <p className='text-xl'>{cycleDuration}</p>
      <img className="max-h-32 w-48 mb-3 place-self-center"src={cycle.img_url} alt={cycle.name}/>
      {/* repeat */}
      <h1 className='text-xl font-bold leading-none'>{cycle.name}</h1>
      <p className='text-xl'>{cycleDuration}</p>
      <img className="max-h-32 w-48 place-self-center overflow-x-hidden"src={cycle.img_url} alt={cycle.name}/>
    </Link>
  )
}

export default CycleCard
