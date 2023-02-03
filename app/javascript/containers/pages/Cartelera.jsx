import React from 'react'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import DownloadButton from '../../components/shared/DownloadButton'
import Layout from '../../hocs/layouts/Layout'

function Cartelera() {
  return (
    <Layout>
      <Navbar/>
      <div className="pt-40 mx-40">
        <div className="flex justify-center">
          <div className="">
            <h1 className="text-2xl font-bold text-center">Cartelera</h1>
            <div className="absolute top-40 right-40">
              <DownloadButton/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </Layout>
  )
}

export default Cartelera
