import styled from "styled-components";

export const SectionTwoContainer = styled.div`
    display: flex;
    &:hover #Info{
        color: ${({theme})=> theme.primaryOrange};
    }
`;

export const EInfo = styled.div`
    position: relative;
    margin:  17px  auto auto  8px;
    color: #afacac;
    font-family: 'Roboto Mono', monospace;
    cursor: pointer;
    &:hover {
        color: ${({theme})=> theme.primaryOrange};
    }
`;