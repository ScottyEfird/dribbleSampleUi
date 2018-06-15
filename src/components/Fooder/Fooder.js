import React from 'react'
import styled from 'styled-components'

const StuffForDays = styled.div`
  margin-top: 30px;
  padding-bottom: 100px;
  padding-top: 30px;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-around;
  align-items: stretch;
  color: white;
  align-content: space-around;
  background-color: #324258;
`
const Header = styled.div`
  font-size: 12px;
  padding-bottom: 15px;
`

const Row = styled.div`
  font-size: 9px;
  color: #97A3AB;
  padding-top: 7px;
  padding-bottom: 7px;
`
const Column = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: stretch;
	align-content: stretch;
`

// I'm sorry, there are a million better ways to do this...
// https://www.youtube.com/watch?v=1vrEljMfXYo

const Fooder = () => (
  <StuffForDays>
    <Column>
      <Header>
      TALENT
      </Header>
      <Row>
      How it works
      </Row>
      <Row>
      Why were free
      </Row>
      <Row>
      Agencies
      </Row>
    </Column>
    <Column>
      <Header>
      HUBSTAFF
      </Header>
      <Row>
      About
      </Row>
      <Row>
      Time tracking
      </Row>
      <Row>
      Developer
      </Row>
      <Row>
      Resources
      </Row>
    </Column>
    <Column>
      <Header>
      SUPORT
      </Header>
      <Row>
      Help Center
      </Row>
      <Row>
      Blog
      </Row>
      <Row>
      FAQ
      </Row>
      <Row>
      Email Us
      </Row>
      <Row>
      Terms
      </Row>
      <Row>
      Privacy
      </Row>
    </Column>
    <Column>
      <Header>
      SOCIAL
      </Header>
      <Row>
        <span className='pt-icon-standard pt-icon-help' style={{ paddingLeft: 10 }} />
        <span className='pt-icon-standard pt-icon-locate' style={{ paddingLeft: 10 }}/>
        <span className='pt-icon-standard pt-icon-new-object' style={{ paddingLeft: 10 }}/>
      </Row>
    </Column>
  </StuffForDays>
)

export default Fooder
