import React from 'react'
import styled from 'styled-components'

const Bar = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 60px;
  padding-right: 60px;
  height: 40px;
  
  *{
    box-shadow: 0 5px 5px #dbdbdb;
  }
`

const Search = styled.div`  
  display: flex;
  align-items: center;  
  justify-content: center;
  width: 100px;
  background: #66ccff;
  height: 50px;
  color: white;
  border-radius: 0px 10px 10px 0px;
`

const Input = styled.input`
  flex-grow: 1;
  height: 40px;
  border: none;
  height: 50px;
  border-radius: 10px 0px 0px 10px;

  :placeholder-shown {
    padding-left: 30px;
  }
`

function SearchBar() {
  return (
    <Bar>
      <Input
        type='text'
        placeholder='Search by keywords (PHP, .NET, graphic design, etc.)'
      />
      <Search
        type='button'
        placeholder='Search'
      >
          Search
      </Search>
    </Bar>
  )
}

export default SearchBar
