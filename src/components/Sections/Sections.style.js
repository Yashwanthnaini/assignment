import styled from "styled-components";

export const SectionContainer = styled.div`
    display: flex;
    &:hover #Info{
        color: ${({theme})=> theme.table.info.hoverBorderColor};
    }
`;

export const Info = styled.div`
    position: relative;
    margin:  17px  auto auto  8px;
    color: ${({theme})=> theme.table.info.textColor};
    font-family: 'Roboto Mono', monospace;
    cursor: pointer;
    &:hover {
        color: ${({theme})=> theme.table.info.hoverBorderColor};
    }
`;