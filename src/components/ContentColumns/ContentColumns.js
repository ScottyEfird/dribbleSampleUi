import styled from 'styled-components'

const ContentColumns = styled.div`  
  display:flex;
  flex-wrap:nowrap;
  flex-direction:row;
  justify-content:flex-start;
  align-items:stretch;


  .left {
    height: 800px;
    flex-basis: 600px;
    order: 1;
  }

  .middle {
    order: 2;
    background: white;
    flex-basis: 100%;
    height: auto;
    box-shadow: 0 3px 3px #dbdbdb;
  }

  .right {
    order: 3;
    background: yellow;
    flex-basis: 600px;
    height: 800px;
  }
`

export default ContentColumns