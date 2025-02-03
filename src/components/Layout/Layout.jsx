import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
export default function Layout() {
 return (
  <div>
   <Navbar />
   <div className="min-h-dvh bg-teal-500">
    
     <Outlet />
    </div>
   
   <Footer />

  </div>
 )
}
