import styled from "styled-components";


export const CBContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover #Info{
        color: ${({theme})=> theme.table.info.hoverBorderColor};
    }  
`;

export const DropDown = styled.div`
    width: 165px;
    cursor: pointer;
`;

export const CBInfo = styled.div`
    position: relative;
    margin:  0px  auto auto  11px;
    color: ${({theme})=> theme.table.info.textColor};
    font-family: 'Roboto Mono', monospace;
    cursor: pointer;
    &:hover {
        color: ${({theme})=> theme.table.info.hoverBorderColor};
    }
`;

export const SOBox = styled.div`
    width: 170px;
    display : flex;
    align-items: center;
`;

export const CBox = styled.div`
    display : flex;
    align-items: center;
    justify-content: center;
    width : 20px;
    height : 20px;
    padding: 5px;
    border-radius: 2px;
    border: solid 2px ${({theme})=> theme.primaryOrange};
`;
export const UCBox = styled.div`
    display : flex;
    align-items: center;
    justify-content: center;
    width : 20px;
    height : 20px;
    padding: 5px;
    border-radius: 2px;
    border: solid 2px #ccc;
    &:hover {
        border: solid 2px ${({theme})=> theme.primaryOrange};
    }
`;

export const Span = styled.span`
    color : ${({theme})=> theme.primaryOrange};
`;

export const Link = styled.a`
    display: flex;
    align-items: center;
    padding: 8px 10px;
`;

export const Label = styled.label`
    margin-left: 5px;
    cursor: pointer;
    font-size: 15px;
`;
