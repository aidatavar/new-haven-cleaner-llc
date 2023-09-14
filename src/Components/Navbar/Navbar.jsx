import React from 'react'
import './navbar.css'
import { GiVacuumCleaner } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';


const Navbar = () => {
  return (
    <section className='navBarSection'>
        <header className='header flex'>

            <div className='logoDiv'>
                <a href="#" className='logo flex'>
                    <h1> <GiVacuumCleaner className='icon'/>
                        New Haven Cleaners LLC</h1>
                </a>
            </div>

            <div className='navBar'>
                <ul className='navLists flex'>
                    <li className='navItem'>
                        <a href="#" className='navLink'>Home</a>
                    </li>

                    <li className='navItem'>
                        <a href="#" className='navLink'>About</a>
                    </li>

                    <li className='navItem'>
                        <a href="#" className='navLink'>Services</a>
                    </li>

                    <li className='navItem'>
                        <a href="#" className='navLink'>Book an estimate </a>
                    </li>
                    
                    <li className='navItem'>
                        <a href="#" className='navLink'>Contact</a>
                    </li>

                    <button className='btn'>
                        <a href="#">Pay Deposit</a>
                    </button>
                </ul>

                <div className='closeNavbar'>
                    <AiFillCloseCircle  className='icon'/>
                </div>
            </div>

            <div className='toggleNavBar'>
                <AiOutlineMenu className='icon' />
            </div>
        </header>
    </section>
  )
}

export default Navbar