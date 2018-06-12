import React from 'react'
import styled from 'styled-components'
import Navbar from './components/header/Navbar'
import SearchBar from './components/header/SearchBar'
import './App.css'

const Rows = styled.div`  
  display: flex;
  flex-wrap: wrap;
`

const MainRow = styled.div`  
@include flex(1 10em);
@include order(2);
`

const SideRow = styled.div`  
@include flex(20em);
@include order(1);
`

function App() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Rows>
        <SideRow>
          1
        </SideRow>
        <MainRow>
          2
        </MainRow>
        <SideRow>
          3
        </SideRow>
      </Rows>
    </div>
  )
}

export default App
