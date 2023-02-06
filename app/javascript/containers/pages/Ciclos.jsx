import React, { useEffect, useState } from 'react'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import CycleCard from '../../components/navigation/shared/CycleCard'
import Layout from '../../hocs/layouts/Layout'

function Ciclos() {
  const [ciclos, setCiclos] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/api/v1/cycles')
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        data.map((cycle) => {
          console.log(cycle)
          setCiclos([...ciclos, cycle])
        })
      });
  }, [])

  return (
    <Layout>
      <Navbar/>
      <div className="pt-40 max-w-7xl mx-auto pb-1 my-6">
        <h1 className='text-center font-bold text-xl'>CICLOS</h1>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 place-items-center'>
          <CycleCard
            name="douglas sirk la emocion inmediata"
            start_date="enero"
            end_date="abril 2023"
            img_url="https://media.istockphoto.com/id/835370890/photo/sunset-sunrise-with-clouds-light-rays-and-other-atmospheric-effect.jpg?s=612x612&w=0&k=20&c=zGDOBYVFY74wX2gUgkonYGtNl1zenev5mPotAqUlJbM="
          />
          <CycleCard
            name="douglas sirk la emocion inmediata"
            start_date="enero"
            end_date="abril 2023"
            img_url="https://media.istockphoto.com/id/835370890/photo/sunset-sunrise-with-clouds-light-rays-and-other-atmospheric-effect.jpg?s=612x612&w=0&k=20&c=zGDOBYVFY74wX2gUgkonYGtNl1zenev5mPotAqUlJbM="
          />
          <CycleCard
            name="douglas sirk la emocion inmediata"
            start_date="enero"
            end_date="abril 2023"
            img_url="https://media.istockphoto.com/id/835370890/photo/sunset-sunrise-with-clouds-light-rays-and-other-atmospheric-effect.jpg?s=612x612&w=0&k=20&c=zGDOBYVFY74wX2gUgkonYGtNl1zenev5mPotAqUlJbM="
          />
          <CycleCard
            name="douglas sirk la emocion inmediata"
            start_date="enero"
            end_date="abril 2023"
            img_url="https://media.istockphoto.com/id/835370890/photo/sunset-sunrise-with-clouds-light-rays-and-other-atmospheric-effect.jpg?s=612x612&w=0&k=20&c=zGDOBYVFY74wX2gUgkonYGtNl1zenev5mPotAqUlJbM="
          />
          <CycleCard
            name="douglas sirk la emocion inmediata"
            start_date="enero"
            end_date="abril 2023"
            img_url="https://media.istockphoto.com/id/835370890/photo/sunset-sunrise-with-clouds-light-rays-and-other-atmospheric-effect.jpg?s=612x612&w=0&k=20&c=zGDOBYVFY74wX2gUgkonYGtNl1zenev5mPotAqUlJbM="
          />
          <CycleCard
            name="douglas sirk la emocion inmediata"
            start_date="enero"
            end_date="abril 2023"
            img_url="https://media.istockphoto.com/id/835370890/photo/sunset-sunrise-with-clouds-light-rays-and-other-atmospheric-effect.jpg?s=612x612&w=0&k=20&c=zGDOBYVFY74wX2gUgkonYGtNl1zenev5mPotAqUlJbM="
          />
        </div>
      </div>
      <Footer/>
    </Layout>
  )
}

export default Ciclos
