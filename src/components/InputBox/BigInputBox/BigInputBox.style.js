import styled from "styled-components";

export const BIContainer = styled.div`
    display: flex;
    &:hover #Info{
        color: ${({theme})=> theme.table.info.hoverBorderColor};
    }
    width: 100%;
`;

export const BISection = styled.section`
    min-height: 1px;
    margin-bottom: 10px;
    padding-right: 10px;
    font : 12px/1.55 "open sans", sans-serif;
    width: 100%;
`;

export const IPBox = styled.div`
    width: 100%;
    cursor: pointer;
`;

export const SelectedOption = styled.div`
   width: 100%;
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

export const Input = styled.input`
    width: 100%;
    height: 39px;
    padding: 5px;
    font-size: 15px;
    border: none;
    background-color: transparent;
    resize: none;
    outline: none;
`;









