import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/footer/Footer'
import Teams from '@/components/Teams'

function page() {
  return (
    <div>
      <Navbar />
      <Teams/>
      <Footer/>
    </div>
  )
}

export default page