import styled from "styled-components";

export const DDContainer = styled.div`
    display: flex;
    &:hover #Info{
        color: ${({theme})=> theme.table.info.hoverBorderColor};
    }
`;

export const DDSection = styled.section`
    min-height: 1px;
    margin-bottom: 10px;
    padding-right: 10px;
    font : 12px/1.55 "open sans", sans-serif;
`;

export const DDLabel = styled.label`
    color: ${({theme})=> theme.table.header.textColor};
    line-height: 8px;
`;

export const DropDown = styled.div`
    width: 165px;
    cursor: pointer;
    position: relative; 
`;

export const SelectedOption = styled.div`
    width: 165px;
    border-radius: 2px;
    border: solid 2px #ccc;
    &:hover {
        border: solid 2px ${({theme})=> theme.table.dropDown.hoverBorderColor};
    }
`;

export const SOBox = styled.div`
    display : flex;
    justify-content: space-between;
    align-items: center;
`;

export const Link = styled.a`
    display: flex;
    align-items: center;
    padding: 8px 10px;
    border-bottom : solid 1px #ddd;
`;

export const ArrowImg = styled.img`
    width: 12px;
    margin-right: 10px;
    transform: ${props => props.openDropDown ? 'rotate(180deg)' : 'rotate(0deg)'};
    -webkit-transition: transform 0.3s ease-in-out;
    -o-transition: transform 0.3s ease-in-out;
    -moz-transition: transform 0.3s ease-in-out;
    transition: transform 0s ease-in-out;
`;


export const Label = styled.label`
    margin-left: 5px;
    cursor: pointer;
    font-size: 15px;
`;

export const UList = styled.ul`
    width: 165px;
    max-height: ${props => (props.openDropDown ? "500px" : "0px")};
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    border: solid 1px #ccc;
    border-top: none;
    box-shadow: 0px 1px 5px #ddd;
    background-color: #fff;
    overflow: auto;
    border-bottom-width: 0;
    -webkit-transition: max-height 0.3s ease-in-out;
    -o-transition: max-height 0.3s ease-in-out;
    -moz-transition: max-height 0.3s ease-in-out;
    transition: max-height 0.25s ease-in-out;
    overflow-y: hidden;
    overflow-x: hidden;
    &::-webkit-scrollbar {
        width: 0px;
        background: transparent;
    }

    position: absolute;
    z-index: 10000;
`;

export const LItem = styled.li`
    color: ${({theme})=> theme.table.listItem.textColor};
    border-bottom : solid 1px #ddd;
    &:hover {
        background: ${({theme})=> theme.table.listItem.hoverBgColor};
        color: ${({theme})=> theme.table.listItem.hoverTextColor};
    }
    transition-property: background, color;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
`;