import styled from 'styled-components'

export const MenuBar = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    border-bottom: solid 1px ${props=>props.theme.colors.grey};
    padding-top: 10px;
`
export const SearchContainer = styled.div`
    width: 60%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
    margin-right: 10%;
    & form{
        width: 80%;
        display: flex;
        flex-direction: row;
        align-items: center;
        align-content: center;
    }
`
export const InputContainer = styled.div`
    width: 90%;
    height: 30px;
    & input{
        width: 100%;
        height: 100%;
        padding: 5px;
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
    }
`
export const BtnContainer = styled.div`
    width: 10%;
    & button{
        background-color: ${props=>props.theme.colors.red};
        color: white;
        width: 100%;
        height: 30px;
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
        cursor: pointer;
    }
`
export const BtnsActionContainer = styled.div`
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`
export const ThemeBtnContainer = styled.div`
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    & i{
        cursor: pointer;
    }
`
export const ProfileBtnContainer = styled.div`
    width: 10%;
    overflow: visible;
    & .trigger{
        background-color: ${props=>props.theme.colors.grey};
        border-radius: 50%;
        height: 40px;
        width: 40px;
        margin-bottom: 10px;
        cursor: pointer;
    }
    & .dropdowns{
        flex-direction: column;
        width: 100px;
        height: auto;
        position: relative;
        background-color: ${props=>props.isDark=='light'?props.theme.colors.text_white:props.theme.colors.text_black};
        top: -10px;
        display: none;
        transition: 300ms;
        box-shadow: 0px 2px 2px 0px;
        border-radius: 5px;
        padding: 5px;
    }

    & .trigger:hover + .dropdowns,.dropdowns:hover{
        display: flex;
    }
`