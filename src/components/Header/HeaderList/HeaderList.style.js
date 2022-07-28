import styled from "styled-components";

export const NavLinksFlexBox = styled.nav`
    width: 100%;
`;

export const UnList = styled.ul`
    display: flex;
    justify-content: space-around;
    list-style: none;
`;

export const LItem = styled.li`
    padding: 8px 18px;
    &:hover {
        background: ${({ theme }) => theme.header.list.textBg};
        color: ${({ theme }) => theme.header.list.textSecondaryColor};
        border-radius: 2px;
    }
`;
