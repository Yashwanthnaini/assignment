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
    width: 300px;
    color: #acacaa;
    font : 12px/1.55 "open sans", sans-serif;
    line-height: 8px;
    display : flex;
    justify-content: space-between;
`;

export const IPBox = styled.div`
    width: 300px;
    cursor: pointer;
    
`;

export const EInfo = styled.div`
    margin:  17px  auto auto  8px;
    color: #afacac;
    cursor: pointer;
    &:hover {
        color: ${({theme})=> theme.primaryOrange};
    }
`;

export const SelectedOption = styled.div`
    width: 300px;
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
 min-height: 120px;
`;

export const TextArea = styled.textarea`
    width: 300px;
    height: 100%;
    border: none;
    background-color: transparent;
    resize: none;
    outline: none;
    font : 15px "open sans", sans-serif;
    padding: 10px;
    overflow: hidden;
`;









