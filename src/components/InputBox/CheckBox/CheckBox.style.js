import styled from "styled-components";


export const DDContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover #Info{
        color: ${({theme})=> theme.primaryOrange};
    }
    
`;

export const DDSection = styled.section`
    min-height: 1px;
    margin-bottom: 10px;
    padding-right: 10px;
    font : 12px/1.55 "open sans", sans-serif;

`;

export const DDLabel = styled.label`
    
    color: #acacaa;
    font : 12px/1.55 "open sans", sans-serif;
    line-height: 8px;
`;

export const DropDown = styled.div`
    width: 165px;
    cursor: pointer;
    
`;

export const IDInfo = styled.div`
    margin:  0px  auto auto  11px;
    color: #afacac;
    font-family: 'Roboto Mono', monospace;
    cursor: pointer;
    &:hover {
        color: ${({theme})=> theme.primaryOrange};
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

export const ArrowImg = styled.img`
    width: 12px;
    margin-right: 10px;
    transform: ${props => props.openDropDown ? 'rotate(180deg)' : 'rotate(0deg)'};
    -webkit-transition: transform 0.3s ease-in-out;
    -o-transition: transform 0.3s ease-in-out;
    -moz-transition: transform 0.3s ease-in-out;
    transition: transform 0s ease-in-out;
`;


export const Label = styled.label`
    margin-left: 5px;
    cursor: pointer;
    font-size: 15px;
`;

