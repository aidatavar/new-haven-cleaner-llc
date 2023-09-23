import React from 'react'
import './app.css'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import About from './Components/About/About';
import Carousel from './Components/Carousel/Carousel'
import Footer from './Components/Footer/Footer'


const App = () => {

  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Main />
    <Carousel />
    <Footer />
    </>
  )
}

export default App;