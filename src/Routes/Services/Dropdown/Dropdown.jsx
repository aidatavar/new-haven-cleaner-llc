import {React, useState} from 'react'
import './dropdown.css'
import {MdArrowDropDown} from 'react-icons/md'
import { Link } from 'react-router-dom';

const Dropdown = () => {
    const [isActive, setIsActive] = useState(false);

  return (

    <div className="dropdown">
        <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>Services
        
        <MdArrowDropDown />
        </div>

        {isActive && (
        <div className="dropdown-content">
            <div className="dropdown-item">
                <Link to="/Home">Home</Link>
            </div>
            <div className="dropdown-item">
            <Link to="/Apartment">Apartment</Link>
            </div>
            <div className="dropdown-item">
            <Link to="/Airbnb">Airbnb</Link>
            </div>
            <div className="dropdown-item">
            <Link to="/Office">Office</Link>
            </div>
            <div className="dropdown-item">
                Post-construction
            </div>
        </div>
        )}
    </div>
  )
}

export default Dropdown