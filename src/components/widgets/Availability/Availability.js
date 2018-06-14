import React from 'react'
import ContentBox from '../../ContentBox'
import WidgetHeader from '../WidgetHeader'

function Availability() {
  return (
    <ContentBox>
      <WidgetHeader
        left={
          <React.Fragment>
            Availability
            <span style={{marginLeft: 5 }} className='pt-icon-standard pt-icon-info-sign' />
          </React.Fragment>
        }
        right={'Clear'}
      />
      <div style={{paddingLeft: 10, paddingTop: 10}}>
        <label className='pt-control pt-checkbox'>
          <input type='checkbox' defaultChecked />
          <span style={{backgroundColor: 'green'}} className='pt-control-indicator'></span>
            Hourly
        </label>

        <label className='pt-control pt-checkbox'>
          <input type='checkbox' defaultChecked />
          <span style={{backgroundColor: 'green'}} className='pt-control-indicator'></span>
            Part-Time (20 hrs/wk)
        </label>

        <label className='pt-control pt-checkbox'>
          <input type='checkbox' defaultChecked />
          <span style={{backgroundColor: 'green'}} className='pt-control-indicator'></span>
            Part-Time (40 hrs/wk)
        </label>
      </div>
    </ContentBox>
  )
}

export default Availability
