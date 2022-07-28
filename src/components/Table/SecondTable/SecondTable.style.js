import styled from "styled-components";

export const STContainer = styled.div``;

export const TotalFieldSet = styled.div`
    visibility: ${props => props.isOpen ? "visible" : "hidden"};
    opacity: ${props => props.isOpen ? 1 : 0};
    max-height: ${props => props.isOpen ? "1000px" : "0px"};
    transition: all 1s cubic-bezier(0.49, 0.78, 0, 0.98);
`;

export const STHeader = styled.header`
    padding: 5px 30px;
    border-bottom : 1px solid rgba(0,0,0,.1);
    background : rgba(221,221,221,.7);
    font-size: 18px;
    font-weight: 600;
    color : #1c6f9e;
    display: flex;
    justify-content: space-between;
`;

export const STHeaderData = styled.div`
    display: flex;
    align-items: center;
    width: 750px;
    height: 25px;
`;

export  const STFieldSet = styled.fieldset`
   
    padding : 25px 30px 5px;
    border: none;
    background: rgba(255,255,255,.9);
    display: flex;
`;

export  const STCBFieldSet = styled.fieldset`
    padding : 10px 30px 5px;
    border: none;
    background: rgba(255,255,255,.9);
`;

export const STFieldData = styled.div`
    display : flex;
    justify-content : space-between;
    margin-left : 0;

`;