import React from 'react'
import TicketCard from '../_UIcomponents/TicketCard'
import Navbar from '../_UIcomponents/Navbar'
import Footer from '../_UIcomponents/Footer'

function page() {
  return (
    <div className='min-h-screen mx-auto'>
      <Navbar />
      <TicketCard name="Priyansh mehta" position="God"/>
      <Footer />
    </div>
  )
}

export default page
