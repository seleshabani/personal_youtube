import styled from 'styled-components'

export const MenuBar = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    border-bottom: solid 1px ${props=>props.theme.colors.grey};
    padding-top: 10px;
    position: sticky;
    top: 0px;
    background-color: ${props=>props.isDark=='light'?props.theme.colors.text_white:props.theme.colors.text_black};
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
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        & img{
            width: 100%;
            height: 100%;

        }
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
        padding: 10px;
        & span{
            font-family: 'Poppins';
            cursor: pointer;
            font-size: 0.6rem;
        }
    }

    & .trigger:hover + .dropdowns,.dropdowns:hover{
        display: flex;
    }
`