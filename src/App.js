import React from 'react'
import './app.css'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import About from './Components/About/About';
import Slider from './Components/Slider/Slider';
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Main />
    <Slider />
    <Footer />
    </>
  )
}

export default App;