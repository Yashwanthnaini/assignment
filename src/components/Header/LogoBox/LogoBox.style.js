import styled from "styled-components";

export const LogoGrid = styled.div`
    height:100%;
    width:100%;
    display: flex;
    column-gap: 10px;
    align-items: end;
    margin-bottom: 15px;
`;

export const LogoImg = styled.img`
    height: 40px;
    width : 150px;
`;

export const LogoText = styled.p`
    margin-bottom: 0;
    font-size: ${({ theme }) => theme.LogoText.size};
    font-weight : ${({ theme }) => theme.LogoText.weight};
`;