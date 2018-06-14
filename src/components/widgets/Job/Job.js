import React from 'react'
import ContentBox from '../../ContentBox'
import WidgetHeader from '../WidgetHeader'

function Job() {
  return (
    <ContentBox>
      <WidgetHeader
        left={
          <React.Fragment>
            Job Type
            <span style={{marginLeft: 5 }} className='pt-icon-standard pt-icon-info-sign' />
          </React.Fragment>
        }
        right={'Clear'}
      />
      <div style={{paddingTop: 10}}>
        <div className='pt-select ' style={{width: '100%' }}>
          <select style={{width: 280}} >
            <option value>Select a job type</option>
            <option value='1'>.</option>
            <option value='2'>.</option>
            <option value='3'>.</option>
            <option value='4'>.</option>
          </select>
        </div>
      </div>
    </ContentBox>
  )
}

export default Job
