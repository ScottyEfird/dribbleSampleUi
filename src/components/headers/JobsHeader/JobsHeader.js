import React from 'react'
import WidgetHeader from '../../widgets/WidgetHeader'
import DisplayBox from '../../ContentBox/DisplayBox'

const JobsHeader = () => (
  <DisplayBox>
    <WidgetHeader
      left={'RESULTS(24)'}
      right={
        <React.Fragment>
          <span style={{paddingRight: 10}}>
            Sort By
          </span>
          <div className='pt-select '>
            <select>
              <option value>Relevance</option>
              <option value='1'>.</option>
              <option value='4'>.</option>
            </select>
          </div>
        </React.Fragment>
      }
    />
  </DisplayBox>
)

export default JobsHeader