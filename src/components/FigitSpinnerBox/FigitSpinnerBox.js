import React from 'react'
import styled from 'styled-components'
import ContentBox from '../ContentBox'

const Box = styled.div`
  padding-top: 30px;
  padding-bottom: 40px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const FigitSpinnerBox = () => (
  <ContentBox>
    <Box>
      <img
        src='static/figit_spinner.png'
        style={{ paddingTop: 2, height: 60 }}
        alt='company logo'
      />
      <br />
      <h4>
        Track time on Hubstaff
      </h4>
      <span  style={{ color: '#767676'}}>
        Pay only for the hours worked
      </span>
      <br />
      <button type='button' className='pt-button pt-intent-primary pt-large'>Sign up</button>
      <br />
      <span  style={{ color: '#1dc5f6'}}>
      Learn more...
      </span>
    </Box>
  </ContentBox>
)

export default FigitSpinnerBox
