import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import CycleCard from '../../components/shared/CycleCard'
import Layout from '../../hocs/layouts/Layout'

function Ciclos() {
  window.scrollTo(0, 0)
  const [ciclos, setCiclos] = useState([])
  const [loaded, setLoaded] = useState(false)
  const cyclesData = useSelector(state => state.dataManager.cycles)

  if (cyclesData.length > 0 && ciclos.length === 0) {
    cyclesData.forEach((cycle,index) => {
      setCiclos(ciclos => [...ciclos, <CycleCard key={index} cycle={cycle}/>])
    })
    setLoaded(true)
  }

  return (
    <Layout>
      <Navbar/>
      <div className="pt-40 max-w-7xl mx-auto pb-1 my-6">
        <h1 className='text-center font-bold text-xl'>CICLOS</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center'>
          {loaded ? ciclos : <h1>Loading...</h1>}
        </div>
      </div>
      <Footer/>
    </Layout>
  )
}

export default Ciclos
