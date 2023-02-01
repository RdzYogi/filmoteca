import React from 'react'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'

function Calendar() {
  return (
    <Layout>
      <Navbar/>
      <div className="pt-40">Calendar</div>
      <Footer/>
    </Layout>
  )
}

export default Calendar
