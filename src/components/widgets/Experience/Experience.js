import React from 'react'
import ContentBox from '../../ContentBox'
import WidgetHeader from '../WidgetHeader'

function Experience() {
  return (
    <ContentBox>
      <WidgetHeader
        left={"Experience Level"}
        right={'Clear'}
      />
      <div style={{paddingTop: 10}}>
        <div className='pt-select ' style={{width: '100%' }}>
          <select style={{width: 280}} >
            <option value>Select your experience Level</option>
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

export default Experience
