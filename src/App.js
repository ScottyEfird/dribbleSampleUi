import React from 'react'
import Navbar from './components/header/Navbar'
import SearchBar from './components/header/SearchBar'
import ContentColumns from './components/ContentColumns'
import Filter from './components/widget/Filter'
import Skills from './components/widget/Skills'
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <ContentColumns>
        <div className='left'>
          <Filter />
          <Skills />
        </div>
        <div className='middle'>
          2
        </div>
        <div className='right'>
          3
        </div>
      </ContentColumns>
    </div>
  )
}

export default App
