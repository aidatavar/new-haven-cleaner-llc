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
                <Link to="/residential-deep-cleaning">RESIDENTIAL DEEP CLEANING</Link>
            </div>
            <div className="dropdown-item">
            <Link to="/residential-cleaning">RESIDENTIAL REGULAR CLEANING</Link>
            </div>
            <div className="dropdown-item">
            <Link to="/move-in">MOVE IN / MOVE OUT</Link>
            </div>
            <div className="dropdown-item">
            <Link to="/Office">OFFICE</Link>
            </div>
            <div className="dropdown-item">
            <Link to="/Post-construction">POST-CONSTRUCTION</Link>
            </div>
        </div>
        )}
    </div>
  )
}

export default Dropdown