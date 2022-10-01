import styled from 'styled-components'

export const Container = styled.div`
    width: 25%;
    height: 100vh;
    position: static;
    border-right: solid 1px ${props=>props.theme.colors.grey};
`
export const Logo = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    border-bottom: solid 1px ${props=>props.theme.colors.grey};
    & a{
        color: ${props=>props.theme.colors.red};
        font-size: 2vw;
        font-family: 'Poppins';
        text-decoration: none;
    }
`