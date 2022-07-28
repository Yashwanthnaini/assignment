import styled from "styled-components";

export const FTHeader = styled.header`
    padding: 5px 30px;
    border-bottom : 1px solid rgba(0,0,0,.1);
    background : ${({ theme }) => theme.table.header.bgColor};
    font-size: ${({ theme }) => theme.table.header.fontSize};
    font-weight: ${({ theme }) => theme.table.header.fontWeight};
    color : ${({ theme }) => theme.table.header.textColor};
    display: flex;
    justify-content: space-between;
`;

export const TotalFieldSet = styled.div`
    visibility: ${props => props.isOpen ? "visible" : "hidden"};
    opacity: ${props => props.isOpen ? 1 : 0};
    max-height: ${props => props.isOpen ? "1000px" : "0px"};
    transition: all 1s cubic-bezier(0.49, 0.78, 0, 0.98);
`;


export  const FTFieldSet = styled.fieldset`
    padding : 25px 30px 5px;
    border: none;
    background: rgba(255,255,255,.9);
`;

export  const FTCBFieldSet = styled.fieldset`
    padding : 0px 30px 5px;
    border: none;
    background: rgba(255,255,255,.9);
`;

export const FTFieldData = styled.div`
    display : flex;
    justify-content : space-between;
`;