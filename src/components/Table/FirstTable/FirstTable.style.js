import styled from "styled-components";

export const FTContainer = styled.div``;

export const TotalFieldSet = styled.div`
    visibility: ${props => props.isOpen ? "visible" : "hidden"};
    opacity: ${props => props.isOpen ? 1 : 0};
    max-height: ${props => props.isOpen ? "1000px" : "0px"};
    transition: visibility 0.3s, opacity 0s ,max-height 0.3s linear;
`;

export const FTHeader = styled.header`
    padding: 5px 30px;
    border-bottom : 1px solid rgba(0,0,0,.1);
    background : rgba(221,221,221,.7);
    font-size: 18px;
    font-weight: 600;
    color : #1c6f9e;
    display: flex;
    justify-content: space-between;
`;

export const FTHeaderData = styled.div`
    width: 750px;
    height: 25px;
`;

export  const FTFieldSet = styled.fieldset`
   
    padding : 25px 30px 5px;
    border: none;
    background: rgba(255,255,255,.9);
`;

export  const FTCBFieldSet = styled.fieldset`
    padding : 10px 30px 5px;
    border: none;
    background: rgba(255,255,255,.9);
`;

export const FTFieldData = styled.div`
    display : flex;
    justify-content : space-between;

`;