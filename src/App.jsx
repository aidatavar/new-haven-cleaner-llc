import React from 'react'
import './app.css'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Hero/Hero';
import Main from './Components/Main/Main';
import About from './Components/About/About';
import Carousel from './Components/Carousel/Carousel'
import Map from './Components/Map/Map';
import Footer from './Components/Footer/Footer'



const App = () => {

  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Main />
    <Carousel />
    <Map />
    <Footer />
    </>
  )
}

export default App;