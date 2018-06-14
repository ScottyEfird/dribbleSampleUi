import React from 'react'
import ContentBox from '../../ContentBox'
import WidgetHeader from '../WidgetHeader'

function Fliter() {
  return (
    <ContentBox>
      <WidgetHeader
        left={'FILTERS'}
        right={'Clear all filters'}
      />
      <hr style={{ borderColor: '#c6c6c6' }} />
    </ContentBox>
  )
}

export default Fliter
