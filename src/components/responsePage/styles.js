import styled from 'styled-components'

export const ResponseDataWrapper = styled.div`
    display:block;
    max-width:700px;
    background: #A6c307;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 1px 24px 5px rgba(0,0,0,0.46);
    -webkit-box-shadow: 0px 1px 24px 5px rgba(0,0,0,0.46);
    -moz-box-shadow: 0px 1px 24px 5px rgba(0,0,0,0.46);
    & ul {
        list-style: none;
        padding-inline-start:0px;
        & li {
            display: grid;
            grid-template-columns: 50% 50%;
            justify-items: start;
        }
    }

`

export const Button = styled.button`
  color: gray;
  font-size: 1.2em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #A6c307;
  border-radius: 3px;
  &:hover{
      color: #A6c307;
      cursor:pointer;
  }
`