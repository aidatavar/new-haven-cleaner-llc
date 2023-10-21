import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'
import Dropdown from '../../Routes/Services/Dropdown/Dropdown';
import { GiVacuumCleaner } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [active, setActive] = useState('navBar')
    // function to toggle navBar
    const showNav = () => {
        setActive('navBar activeNavbar')
    }

     // function to remove navBar
     const removeNav = () => {
        setActive('navBar')
    }

    const options = ['Home', 'Apartment', 'AirBnb', 'Office', 'Post-construction'];
    const defaultOption = options[0];

  return (

    <section className='navBarSection'>
        <header className='header flex'>

            <div className='logoDiv'>
                <Link to="/" className='logo flex'>
                    <h1> <GiVacuumCleaner className='icon'/>
                        New Haven Cleaners LLC</h1>
                </Link>
            </div>

            <div className={active}>
                <ul className='navLists flex'>
                    <li className='navItem'>
                        <Link to="/" className='navLink'>Home</Link>
                    </li>

                    <li className='navItem'>
                        <Dropdown className='navLink'/>
                    </li>

                    <li className='navItem'>
                    <Link to="/Contact" className='navLink'>Contact</Link>
                    </li>

                    <button className='btn'>
                    <Link to="/Book" className='navLink'>Book Service</Link>
                    </button>
                </ul>

                <div onClick={removeNav}
                 className='closeNavbar'>
                    <AiFillCloseCircle  className='icon'/>
                </div>
            </div>

            <div onClick={showNav} className='toggleNavBar'>
                <AiOutlineMenu className='icon' />
            </div>
        </header>
    </section>
  )
}

export default Navbar