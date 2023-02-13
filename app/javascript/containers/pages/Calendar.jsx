import React, { useState } from 'react'
import Footer from '../../components/navigation/Footer'
import Navbar from '../../components/navigation/Navbar'
import Layout from '../../hocs/layouts/Layout'
import Day from "../../components/calendar/Day"

function Calendar() {


  return (
    <Layout>
      <Navbar/>

      <Footer/>
    </Layout>
  )
}

export default Calendar
