import React from 'react'
import styled from 'styled-components'
import { Icon } from "@blueprintjs/core"

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

const Avatar = styled.img`
  vertical-align: middle;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`

function Navbar() {
  return (
    <Nav>
      <div>
        <img
          src='static/company_logo.png'
          style={{ paddingTop: 2 }}
          alt='company logo'
        />
      </div>
      <div>
        <NavElement>
          How it works
        </NavElement>
        <NavElement>
          Browse
          <Icon icon='caret-down' />
        </NavElement>
        <NavElement>
          Search
        </NavElement>
        <NavElement style={{ textTransform: 'none' }}>
          <Avatar
            src='static/rebecca_black.png'
            alt='It`s Friday, Friday, Friday'
          />
          My Account
          <Icon icon='caret-down' />
        </NavElement>
      </div>
    </Nav>
  )
}

export default Navbar
