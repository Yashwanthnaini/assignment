import styled from "styled-components";

export const HeaderContainer = styled.nav`
    display : grid;
    grid-template-columns : 0.5fr 4fr 8fr 0.5fr;
    align-items : end;
    width : 99.8%;
    height : 25%;
    line-height: ${({ theme }) => theme.header.list.lineHeight};
    font-weight: ${({ theme }) => theme.header.list.fontWeight};
    margin : auto;
    font-size: ${({ theme }) => theme.header.list.fontSize};
    background: ${({ theme }) => theme.header.bgGradient};
    color : ${({ theme }) => theme.header.list.textPrimaryColor};
`;