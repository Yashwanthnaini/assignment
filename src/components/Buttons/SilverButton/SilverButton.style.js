import styled from "styled-components";

export const Button = styled.button`
    background : ${({ theme }) => theme.button.bgColorSecondary};
    color : ${({ theme }) => theme.button.textColor};
    padding : 8px 15px;
    border: none;
    margin: 0px 10px;
`;