import styled from "styled-components";


export const EIContainer = styled.div`
    display: flex;
    &:hover #Info{
        color: ${({theme})=> theme.table.info.hoverBorderColor};
    }
`;

export const EISection = styled.section`
    min-height: 1px;
    margin-bottom: 10px;
    padding-right: 10px;
    font : 12px/1.55 "open sans", sans-serif;

`;

export const EILabel = styled.label`
    color: ${({theme})=> theme.table.dropDown.textColor};
    line-height: ${({theme})=> theme.table.dropDown.lineHeight};
    width: 100%;
    margin-bottom : 6px;
    font : 12px/1.55 "open sans", sans-serif;
    display : flex;
    justify-content: space-between;
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
    min-height: 120px;
`;

export const TextArea = styled.textarea`
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    resize: none;
    outline: none;
    font : 15px "open sans", sans-serif;
    padding: 10px;
    overflow: hidden;
`;









