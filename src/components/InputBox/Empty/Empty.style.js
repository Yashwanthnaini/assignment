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
`;

export const IPBox = styled.div`
    width: 165px;
    cursor: pointer;
    
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

export const Input = styled.input`
    width: 165px;
    height: 39px;
    border: none;
    background-color: transparent;
    resize: none;
    outline: none;
`;









