import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Arrival from './pages/arrival'
import ShopNow from './pages/ShopNow'

const Layout = () => (
  <div>
    <Navbar />
    <Hero />
    <Arrival />
    <ShopNow />
  </div>
)

export default Layout
