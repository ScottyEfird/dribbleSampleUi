import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ContentBox from '../../ContentBox'
import WidgetHeader from '../WidgetHeader'

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

const SkillBox = ({ values, header }) => (
  <ContentBox>
    <WidgetHeader
      left={header}
      right={'Clear'}
    />
    <TagBox>
      {values && values.map(value => (
        <Tag className='pt-tag pt-minimal pt-tag-removable pt-interactive' key={value}>
          {value}
          <button className='pt-tag-remove' onClick={() => {}}></button>
        </Tag>
      ))}
    </TagBox>
  </ContentBox>
)

SkillBox.propTypes = {
  values: PropTypes.array,
  header: PropTypes.string,
}

export default SkillBox
