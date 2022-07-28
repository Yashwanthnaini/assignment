import styled from "styled-components";


export const EIContainer = styled.div`
    display: flex;
    &:hover #Info{
        color: ${({theme})=> theme.primaryOrange};
    }
    
`;

export const EISection = styled.section`
    min-height: 1px;
    margin-bottom: 10px;
    padding-right: 10px;
    font : 12px/1.55 "open sans", sans-serif;

`;

export const EILabel = styled.label`
    
    color: #acacaa;
    font : 12px/1.55 "open sans", sans-serif;
    line-height: 8px;
`;

export const IPBox = styled.div`
    width: 165px;
    cursor: pointer;
    
`;

export const EInfo = styled.div`
    margin:  17px  auto auto  8px;
    color: #afacac;
    font-family: 'Roboto Mono', monospace;
    cursor: pointer;
    &:hover {
        color: ${({theme})=> theme.primaryOrange};
    }
`;

export const SelectedOption = styled.div`
    width: 165px;
    border-radius: 2px;
    border: solid 2px #ccc;
    &:hover {
        border: solid 2px ${({theme})=> theme.primaryOrange};
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









