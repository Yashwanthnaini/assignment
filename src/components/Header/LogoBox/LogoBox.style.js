import styled from "styled-components";

export const LogoGrid = styled.div`
    height:100%;
    width:100%;
    display: flex;
    align-items: end;
    column-gap: 10px;
    margin-bottom: 15px;
`;

export const LogoImg = styled.img`
    height: 40px;
    width : 150px;
`;

export const LogoText = styled.p`
    margin-bottom: 0;
    font-size: ${({ theme }) => theme.header.logo.fontSize};
    font-weight : ${({ theme }) => theme.header.logo.fontWeight};
`;