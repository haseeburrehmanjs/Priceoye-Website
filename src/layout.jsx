import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Arrival from './pages/arrival'
import ShopNow from './pages/ShopNow'
import YoungFav from './pages/YoungFav'
import DownloadApp from './pages/DownloadApp'

const Layout = () => (
  <div>
    <Navbar />
    <Hero />
    <Arrival />
    <ShopNow />
    <YoungFav />
    <DownloadApp />
  </div>
)

export default Layout
