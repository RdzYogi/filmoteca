import React from 'react'

function CycleCard(cycle) {

  return (
    <div className='text-center relative flex flex-col bg-orange-500 h-5/6 w-80 p-5 pb-0'>
      <div className='absolute right-36 top-44 -rotate-90'>
        <p className='w-80 text-xs'>CICLO CICLO CICLO CICLO CICLO CICLO CICLO</p>
      </div>
      <h1 className='text-2xl font-bold'>{cycle.cycle.name}</h1>
      <p className='text-xl'>{cycle.cycle.start_date} - {cycle.cycle.end_date}</p>
      <img className="h-32 w-48 mb-3 place-self-center"src={cycle.img_url} alt={cycle.name}/>
      {/* repeat */}
      <h1 className='text-2xl font-bold'>{cycle.cycle.name}</h1>
      <p className='text-xl'>{cycle.start_date} - {cycle.end_date}</p>
      <img className="h-32 w-48 place-self-center overflow-x-hidden"src={cycle.img_url} alt={cycle.name}/>
    </div>
  )
}

export default CycleCard
