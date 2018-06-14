import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Header = styled.div`  
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: stretch;
  align-content: stretch;
`

function WidgetHeader({left, right}) {
  return (
    <Header>
      <div>
        <strong>
          {left}
        </strong>
      </div>
      <div style={{color: '#c6c6c6'}}>
        {right}
      </div>
    </Header>
  )
}

WidgetHeader.propTypes = {
  left: PropTypes.string,
  right: PropTypes.string,
}

export default WidgetHeader
