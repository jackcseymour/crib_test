import React from 'react'
import { Nav, NavLink, NavMenu } from './NavbarElements'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/list" activeStyle>
            List
          </NavLink>
          <NavLink to="/chat" activeStyle>
            Chat
          </NavLink>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  )
}

export default Navbar
