import styled from "styled-components";
import Pattern from "../../../assets/pattern.jpg";

export const BFooterContainer = styled.div`
    width: 99.9%;
    margin: auto;
    height: 70px;
    display: grid;
    place-items: center;
    border-top: 4px solid #000;
    background-image: url(${Pattern});
    color:${({ theme }) => theme.secondaryLight};

`;

export const BFooterText = styled.b`
    width: 85vw;
    display: grid;
    justify-items: left;
    font-size: ${({ theme }) => theme.LogoText.size};
    font-weight: ${({ theme }) => theme.LogoText.weight};
`;