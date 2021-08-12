import styled from 'styled-components'

export const CartListWrapper = styled.div`
    max-width:650px;
    padding: 30px;
    & ul {
        list-style: none;
        padding-inline-start:0px;
        & li {
            display: grid;
            grid-template-columns: 40% 20% 20% 20%;
            justify-items: start;
        }
    }
    & h5 {
        width:100%;
        text-align: left;
    }
`

export const Button = styled.button`
  color: gray;
  font-size: 1.2em;
  width:100%;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #A6c307;
  border-radius: 3px;
  &:hover{
      color: #A6c307;
      cursor:pointer;
  }
`