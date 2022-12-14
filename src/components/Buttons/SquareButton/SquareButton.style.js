import styled from "styled-components";

export const Button = styled.button`
    background : ${({ theme }) => theme.button.bgColorPrimary};
    color : ${({ theme }) => theme.button.textColor};
    padding : 8px 15px;
    border: none;
    margin: 0px 10px;
`;