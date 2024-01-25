import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdOutlineDashboard,MdOutlinePermIdentity } from "react-icons/md";
const Sidebar = ({ className }) => {
  const NavClassname = "sidenav h3"
  return (
    <nav className={className}>
      <NavLink to={'/'} className={NavClassname}>
        <MdOutlineDashboard/> Dashboard
      </NavLink>
      <NavLink to={'/about'} className={NavClassname} >
        <MdOutlinePermIdentity /> About
      </NavLink>
    </nav>
  )
}

export default Sidebar