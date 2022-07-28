import styled from "styled-components";

export const Button = styled.button`
    background : ${({ theme }) => theme.primaryOrange};
    color : ${({ theme }) => theme.primaryLight};
    padding : 8px 15px;
    border: none;
    margin: 0px 10px;
`;