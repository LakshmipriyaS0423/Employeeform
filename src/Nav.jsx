import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmployeeLogin from './EmployeeLogin'
import EmployeeList from './EmployeeList'
import Navbar from './Navbar'
import { Logout } from './Logout'



const Nav = () => {
  return (
    <div className='r'>
      <BrowserRouter>
      <Navbar />
       <Routes>
         <Route path='/EmployeeLogin' element={<EmployeeLogin/>}/>
         <Route path='/EmployeeList' element={<EmployeeList/>}/>
         <Route path='/Logout' element={<Logout/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Nav