import styled from 'styled-components'

export const Container = styled.div`
    width: 25%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: solid 1px ${props=>props.theme.colors.grey};
    position: fixed;
    @media only screen and (max-width: 860px){
        width: 20%;
    }
`
export const Logo = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    padding-left: 10%;
    align-items: center;
    align-content: center;
    border-bottom: solid 1px ${props=>props.theme.colors.grey};
    & a{
        color: ${props=>props.theme.colors.red};
        font-size: 2vw;
        font-weight: 1000;
        font-family: 'Poppins';
        text-decoration: none;
    }
`
export const MenuWrapper = styled.div`
    width: 80%;
    height: calc(100% - 70px);
    padding-top: 20px;
`
export const MenuEl = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
    & i{
        margin-right: 10px;
    }
    & a {
        font-family: 'Poppins';
        text-decoration: none;
        font-weight: 800;
    }
    @media only screen and (max-width: 860px){
        width: 20%;
        & a {
            font-size:1.5vw
        }
    }
`