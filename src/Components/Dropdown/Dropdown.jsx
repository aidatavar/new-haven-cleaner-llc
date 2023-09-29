import {React, useState} from 'react'
import './dropdown.css'
import {MdArrowDropDown} from 'react-icons/md'

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
                Home
            </div>
            <div className="dropdown-item">
                Apartment
            </div>
            <div className="dropdown-item">
                AirBnb
            </div>
            <div className="dropdown-item">
                Office
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