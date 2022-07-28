import styled from "styled-components";


export const EIContainer = styled.div`
    display: flex;
    &:hover #Info{
        color: ${({theme})=> theme.primaryOrange};
    }
    width: 100%;
    
`;

export const EISection = styled.section`
    min-height: 1px;
    margin-bottom: 10px;
    padding-right: 10px;
    font : 12px/1.55 "open sans", sans-serif;
    width: 100%;

`;

export const EILabel = styled.label`
    
    color: #acacaa;
    font : 12px/1.55 "open sans", sans-serif;
    line-height: 8px;
`;

export const IPBox = styled.div`
    width: 100%;
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
    width: 100%;
    border-radius: 2px;
    border: transparent;
    
`;

export const SOBox = styled.div`
 display : flex;
 justify-content: end;
 align-items: center;
`;


export const P = styled.p`
    color: #666;
    font-weight: 600;
    font-size: 14px;
`;









