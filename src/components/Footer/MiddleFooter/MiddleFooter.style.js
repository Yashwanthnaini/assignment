import styled from "styled-components";

export const MFooterContainer = styled.div`
    width: 99.9%;
    margin: auto;
    height: 420px;
    display : grid;
    justify-items: stretch;
    align-items: center;
`;

export const FlexDivOne = styled.div`
    margin-top: 25px;
    display: flex;
    flex-wrap : wrap;
    justify-content : space-around;
`;

export const FlexDivTwo = styled.div`
    display: flex;
    align-items : center;
    justify-content : left;
    border-top: 1.5px solid #3a3a3a;
    width: 90%;
    margin: auto;
`;

export const P = styled.p`
    font-size: 22px;
    font-weight: 400;
    margin-bottom: 27px;
`;

export const LangLink = styled.a`
    display: flex;
    justify-content: space-around;
    margin-left: 15px;
    color: ${({ theme }) => theme.primaryBlue};
`;