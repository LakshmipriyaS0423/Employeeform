import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
        <NavLink className='navv' to='/EmployeeLogin'>Home</NavLink>
        <NavLink className='navv' to='/EmployeeList'>EmployeeList</NavLink>
        <NavLink className='navv' to='/Logout'>Logout</NavLink>
    </div>
  )
}

export default Navbar