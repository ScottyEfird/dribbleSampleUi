import React from 'react'
import styled from 'styled-components'
import { RangeSlider } from "@blueprintjs/core"
import ContentBox from '../../ContentBox'
import WidgetHeader from '../WidgetHeader'

const Box = styled.span`
  background-color: white;  
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border-style: solid;
  border-radius: 5px;
  border-width: 1px;
  border-color: #c6c6c6;
`

class PayRate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      range: [18, 32]
    }
  }

  setValueChange(e) {
    this.setState({ range: e })
  }

  render() {
    const { range } = this.state

    return (
      <ContentBox>
        <WidgetHeader
          left={"Pay rate /hr ($)"}
          right={'Clear'}
        />
        <div style={{ marginTop: 10, marginBottom: 10 }}>
          <Box>
            {range[0]}
          </Box>
          -
          <Box>
            {range[1]}
          </Box>
        </div>
        <div style={{paddingTop: 10}}>
          <RangeSlider
            min={1}
            max={40}
            onChange={(e) => this.setValueChange(e)}
            labelStepSize={39}
            value={range}
          />
        </div>
        <div style={{paddingTop: 10}}>
          <label className='pt-control pt-checkbox'>
            <input type='checkbox' defaultChecked />
            <span style={{backgroundColor: 'green'}} className='pt-control-indicator'></span>
              Include profiles without pay rates
          </label>
        </div>
      </ContentBox>
    )
  }
}

export default PayRate