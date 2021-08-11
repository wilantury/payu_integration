import styled from 'styled-components'

export const HeaderWrapper = styled.header`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const DivCart = styled.div`
    display: flex;
    align-items: center;
`

export const Logo = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    & p {
        margin-left: 10px;
        color: lightgrey;
    }
`