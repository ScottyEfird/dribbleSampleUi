import React from 'react'
import JobRow from '../JobRow'
import JOBS from '../../util/Jobs'

const JobsContainer = () => (
  <div>
    {JOBS && JOBS.map(job => (
      <JobRow job={job} key={job.id} />
    ))}
  </div>
)

export default JobsContainer