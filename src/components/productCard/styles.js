import styled from 'styled-components'


export const CardWrapper = styled.div`
    display: flex;
    flex-direction:column;
    width: 200px;
    font-family:Arial, "Helvetica", sans-serif;
    box-shadow: 0px 1px 24px 5px rgba(0,0,0,0.46);
    -webkit-box-shadow: 0px 1px 24px 5px rgba(0,0,0,0.46);
    -moz-box-shadow: 0px 1px 24px 5px rgba(0,0,0,0.46);
    overflow: hidden;
    border-radius: 10px;
    margin: 10px;
    max-height: 350px;
    & h3, h4 {
        margin-left: 10px;
        padding: 5px;
    }
    & Img {
        max-height: 150px
    }
`

export const AddListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    & input[type="number"] {
        width: 50px;
        height: 40px;
        margin-bottom: 10px;
        text-align: center;
        font-size: 20px;
    }
    & button{
        background-color: lightblue;
        height: 40px;
        padding: 5px;
        margin-bottom: 10px;
        margin-left: 10px;
    }
`

export const Img = styled.img`
    height:100%;
    object-fit: cover;
    top: 0;
    width: 100%;
`