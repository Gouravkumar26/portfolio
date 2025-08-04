import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../Footer/Footer'

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 md:px-10">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout