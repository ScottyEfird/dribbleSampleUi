import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import DisplayBox from '../ContentBox/DisplayBox'
import JobTypes from '../../util/JobTypes'

const Row = styled.div`  
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: stretch;
  align-content: stretch;
`
const Tag = styled.div`
  margin-left: 10px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 10px;
  color: white !important;
  background-color: 
  ${props => props.type ===  JobTypes.HOURLY
    ? '#32CD32' : props.type === JobTypes.PART_TIME
      ? '#ffd700' : '#1dc5f6' } !important;
`

const UiTag = styled.div`
  margin-top: 10px;  
  margin-right: 5px;  
  padding-top: 2px;
  padding-bottom: 2px;
  border-style: solid;
  border-radius: 10px;
  border-width: 1px;
  border-color: #C6C6C6;
  background-color: white !important;
`

const JobRow = ({ job: { title, pay, type, location, replayRate, description, tags } }) => (
  <DisplayBox>
    <Row>
      <div>
        {title}
        <Tag className='pt-tag pt-minimal' type={type} >
          {type}
        </Tag>
        <br />
        <div>
          <span style={{ color: '#1dc5f6' }}>
            <span className='pt-icon-standard pt-icon-office' style={{marginRight: 5}} />
            {location.job}
          </span>
          <span
            className='pt-icon-standard pt-icon-map-marker'
            style={{color: '#32CD32', marginLeft: 10, marginRight: 5}}
          />
          <span style={{ color: '#767676' }}>
            {location.address}
            <br />
            Pay rate: <span style={{ color: 'black' }}> {replayRate} </span>
          </span>
          <br />
          <div style={{ color: '#767676', paddingTop: 15 }}>
            {description}
          </div>
          <div>
            {tags && tags.map(value => (
              <UiTag className='pt-tag pt-minimal' key={value} style={{ color: '#767676'}}>
                {value}
              </UiTag>
            ))}
          </div>
          <hr />
        </div>
      </div>
      <div>
        {pay}
      </div>
    </Row>
  </DisplayBox>
)

JobRow.propTypes = {
  job: PropTypes.object,
}

export default JobRow
