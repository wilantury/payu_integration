import styled from 'styled-components'

export const CartListWrapper = styled.div`
    display:block;
    min-width:350px;
    position: absolute;
    background: slategray;
    padding: 10px;
    top: 10%;
    right: 10%;
    border-radius: 10px;
    box-shadow: 0px 1px 24px 5px rgba(0,0,0,0.46);
    -webkit-box-shadow: 0px 1px 24px 5px rgba(0,0,0,0.46);
    -moz-box-shadow: 0px 1px 24px 5px rgba(0,0,0,0.46);
    & ul {
        list-style: none;
        padding-inline-start:0px;
        & li {
            display: grid;
            grid-template-columns: 50% 25% 25%;
            justify-items: start;
        }
    }
    & h5 {
        width:100%;
        text-align: left;
    }
`