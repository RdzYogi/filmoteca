import React from 'react'
import { Link } from 'react-router-dom';

function CycleCard(cycleData) {
  const cycle = cycleData.cycle
  // Convert string to date
  const startDate = new Date(cycle.start_date)
  const endDate = new Date(cycle.end_date)

  // Extract month from date in spanish
  const optionMonth = { month: 'long' };
  // console.log(new Intl.DateTimeFormat('es-ES',optionMonth).format(startDate))
  const startDateMonth = new Intl.DateTimeFormat('es-ES',optionMonth).format(startDate)
  const endDateMonth = new Intl.DateTimeFormat('es-ES',optionMonth).format(endDate)

  // Extract year from date
  const optionYear = { year: 'numeric' };
  const startDateYear = new Intl.DateTimeFormat('es-ES',optionYear).format(startDate)
  const endDateYear = new Intl.DateTimeFormat('es-ES',optionYear).format(endDate)

  return (
    <Link to={"/ciclos/" + cycle.slug} className={'text-center relative flex flex-col h-5/6 w-80 p-5 pb-0 ' + 'bg-'+cycle.color}>
      <div className='absolute right-36 top-44 -rotate-90'>
        <p className='w-80 text-xs'>CICLO CICLO CICLO CICLO CICLO CICLO CICLO</p>
      </div>
      <h1 className='text-2xl font-bold'>{cycle.name}</h1>
      {/* If the year of the start is different from end we will display it */}
      {/* Also if the month is the same we only display it once */}
      <p className='text-xl'>{startDateMonth === endDateMonth ? "" : startDateMonth} {startDateYear === endDateYear ? "" : startDateYear} - {endDateMonth} {endDateYear}</p>
      <img className="h-32 w-48 mb-3 place-self-center"src={cycle.img_url} alt={cycle.name}/>
      {/* repeat */}
      <h1 className='text-2xl font-bold'>{cycle.name}</h1>
      <p className='text-xl'>{startDateMonth === endDateMonth ? "" : startDateMonth} {startDateYear === endDateYear ? "" : startDateYear} - {endDateMonth} {endDateYear}</p>
      <img className="h-32 w-48 place-self-center overflow-x-hidden"src={cycle.img_url} alt={cycle.name}/>
    </Link>
  )
}

export default CycleCard
