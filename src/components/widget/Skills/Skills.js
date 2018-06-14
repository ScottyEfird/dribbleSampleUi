import React from 'react'
import styled from 'styled-components'
import ContentBox from '../../ContentBox'
import WidgetHeader from '../../WidgetHeader'

const TagBox = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 3px;
  margin-top: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: #c6c6c6;
`
const Tag = styled.div`
  margin: 2px;
  padding-top: 4px;
  padding-bottom: 4px;
  border-style: solid;
  border-width: 1px;
  border-color: #c6c6c6;
`

function Skills() {
  return (
    <ContentBox>
      <WidgetHeader
        left={'Skills'}
        right={'Clear'}
      />
      <TagBox>
        <Tag className='pt-tag pt-minimal pt-tag-removable pt-interactive'>
          Tracking
          <button className='pt-tag-remove'></button>
        </Tag>
        <Tag className='pt-tag pt-minimal pt-tag-removable pt-interactive'>
          Moblie
          <button className='pt-tag-remove'></button>
        </Tag>
        <Tag className='pt-tag pt-minimal pt-tag-removable pt-interactive'>
          PHP
          <button className='pt-tag-remove'></button>
        </Tag>
        <Tag className='pt-tag pt-minimal pt-tag-removable pt-interactive'>
          Photoshop
          <button className='pt-tag-remove'></button>
        </Tag>
      </TagBox>
    </ContentBox>
  )
}

export default Skills
