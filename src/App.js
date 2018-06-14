import React from 'react'
import Navbar from './components/header/Navbar'
import SearchBar from './components/header/SearchBar'
import ContentColumns from './components/ContentColumns'
import Filter from './components/widgets/Filter'
import SkillBox from './components/widgets/SkillBox'
import Availability from './components/widgets/Availability'
import Job from './components/widgets/Job'
import PayRate from './components/widgets/PayRate'
import Experience from './components/widgets/Experience'
import Countries from './components/widgets/Countries'
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <ContentColumns>
        <div className='left'>
          <Filter />
          <SkillBox header={'Skills'} values={['Tracking', 'Moblie', 'PHP', 'Photoshop']} />
          <Availability />
          <Job />
          <PayRate />
          <Experience />
          <Countries />
          <SkillBox header={'Languages'} values={['English']} />
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