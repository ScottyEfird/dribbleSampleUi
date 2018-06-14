import React from 'react'
import ContentBox from '../../ContentBox'
import WidgetHeader from '../WidgetHeader'

function Countries() {
  return (
    <ContentBox>
      <WidgetHeader
        left={"Countries Level"}
        right={'Clear'}
      />
      <div style={{paddingTop: 10}}>
        <div className='pt-input-group'>
          <span className='pt-icon pt-icon-search'></span>
          <input className='pt-input'  type='search' placeholder='Enter state, province or county' />
        </div>
      </div>
    </ContentBox>
  )
}

export default Countries
