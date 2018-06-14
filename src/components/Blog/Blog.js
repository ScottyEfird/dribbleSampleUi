import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ContentBox from '../ContentBox'

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
`

const Body = styled.div`
  padding-top: 10px;  
  padding-bottom: 10px;  
  font-size: 11px;
  color: #909090;
`

const Blog = ({ title }) => (
  <ContentBox>
    {title}
    <hr />
    <Header>
          Senior Ruby on Rails enginner
      <span>
          $60/hr
      </span>
    </Header>
    <Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
    </Body>
    <Header>
          Senior product designer
      <span>
          $45/hr
      </span>
    </Header>
    <Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
    </Body>
  </ContentBox>
)

Blog.propTypes = {
  title: PropTypes.string,
}

export default Blog
