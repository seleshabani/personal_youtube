import styled from 'styled-components'

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 60px;
    padding-top: 10px;
    position: sticky;
    top: 0px;
    transition: 300ms;
    border-bottom: solid 1px ${props=>props.theme.colors.grey};
    background-color: ${props=>props.isDark=='light'?props.theme.colors.text_white:props.theme.colors.text_black};
    @media only screen and (max-width: 430px){ 
        height: ${({isVisible})=>isVisible?'100px':'50px'}
     }
`
export const MobileMenu = styled.div`
    display: none;
    @media only screen and (max-width: 430px){      
        height: 50px;
        width: 100%;
        /* display: flex; */
        display: ${({isVisible})=>isVisible?'flex':'none'};
        justify-content: center;
        align-items: center;
        align-content: center;
    } 
`
export const MobileMenuWrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
`
export const MobileMenuItem = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    & a{
        font-size: 15px;
        margin-bottom: 5px;
        text-decoration: none;
        width: 100%;
    }
`
export const MenuBar = styled.div`
    /* height: 50px; */
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: space-evenly;
    /* border-bottom: solid 1px ${props=>props.theme.colors.grey};
    padding-top: 10px;
    position: sticky;
    top: 0px; */
/*  background-color: ${props=>props.isDark=='light'?props.theme.colors.text_white:props.theme.colors.text_black}; */
`
export const BtnsActionContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    @media only screen and (max-width: 430px){      
        display: none;
        //border: solid yellow;
    } 
`
export const ThemeBtnContainer = styled.div`
    width: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    & i{
        cursor: pointer;
    }
`
export const ProfileBtnContainer = styled.div`
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
    .profil_img{
        border-radius: 50%;
        height: 40px;
        width: 40px;
        margin-bottom: 10px;
        overflow: hidden;
        & img{
            width: 100%;
            height: 100%;
        }
    }
    .logout{
        cursor: pointer;
        margin-right: 10px;
    }
`
export const MobileMenuTrigger = styled.div`
    display: none;
    @media only screen and (max-width: 430px){      
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        cursor: pointer;
    } 
`
export const MobileMenuThemeTrigger = styled.div`
    display: none;
    @media only screen and (max-width: 430px){      
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        cursor: pointer;
    } 
`