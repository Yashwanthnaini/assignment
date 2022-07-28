import styled from "styled-components";

export const TFooterContainer = styled.div`
    width: 100%;
    height: 70px;
    background : ${({ theme }) => theme.footer.top.bgColor};
`;

export const Div = styled.div`
    width: 100%;
    height: 100%;
    display : grid;
    grid-template-columns: 1fr 9fr;
    align-items: center;
`;

export const P = styled.i`
    font-size: 23px;
    font-weight: 400;
    font-style: italic;
    color: ${({ theme }) => theme.footer.top.textColor};
`;