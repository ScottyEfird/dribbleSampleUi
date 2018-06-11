import React from 'react'
import styled from 'styled-components'

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding-left: 60px;
  padding-right: 60px;
  height: 70px;
  box-shadow: 0px 3px 5px #dbd6d6;
  color: #626262;
  text-transform: uppercase;
`

const NavElement = styled.span`
  padding-left: 15px;
  padding-right: 15px;
`

function Navbar() {
  return (
    <Nav>
      <div>
        <img src='static/company_logo.png' style={{ paddingTop: 2 }} />
      </div>
      <div>
        <NavElement>
          How it works
        </NavElement>
        <NavElement>
          Browse
        </NavElement>
        <NavElement>
          Search
        </NavElement>
      </div>
    </Nav>
  )
}

export default Navbar
