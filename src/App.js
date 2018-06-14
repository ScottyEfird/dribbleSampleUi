import React from 'react'
import Navbar from './components/headers/Navbar'
import SearchBar from './components/headers/SearchBar'
import JobsHeader from './components/headers/JobsHeader'
import ContentColumns from './components/ContentColumns'
import Filter from './components/widgets/Filter'
import SkillBox from './components/widgets/SkillBox'
import Availability from './components/widgets/Availability'
import Job from './components/widgets/Job'
import PayRate from './components/widgets/PayRate'
import Experience from './components/widgets/Experience'
import Countries from './components/widgets/Countries'
import JobsContainer from './components/JobsContainer'
import FigitSpinnerBox from './components/FigitSpinnerBox'
import Blog from './components/Blog'
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
          <JobsHeader />
          <JobsContainer />
        </div>
        <div className='right'>
          <FigitSpinnerBox />
          <Blog title={'TOP JOBS'}/>
          <Blog title={'MOST VIEWED THIS WEEK'}/>
        </div>
      </ContentColumns>
    </div>
  )
}

export default App