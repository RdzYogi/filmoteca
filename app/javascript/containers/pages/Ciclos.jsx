import React, { useEffect, useState } from 'react'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import CycleCard from '../../components/shared/CycleCard'
import Layout from '../../hocs/layouts/Layout'

function Ciclos() {
  // We declare a state so we can store the data from the API
  // and use it later in the component
  const [ciclos, setCiclos] = useState([])
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    fetch('api/v1/cycles')
      .then((response) => response.json())
      .then((data) => {
        data.map((cycle,index) => {
          setCiclos(ciclos => [...ciclos, <CycleCard key={index} cycle={cycle}/>])
        })
        setLoaded(true)
      });
  }, [])

  return (
    <Layout>
      <Navbar/>
      <div className="pt-40 max-w-7xl mx-auto pb-1 my-6">
        <h1 className='text-center font-bold text-xl'>CICLOS</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center'>

          {/* First check if the data is loaded, then render */}
          {/* If the data is not yet loaded we can have a placeholder header or animation */}
          {loaded ? ciclos : <h1>Loading...</h1>}

        </div>
      </div>
      <Footer/>
    </Layout>
  )
}

export default Ciclos
