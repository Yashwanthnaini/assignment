import styled from "styled-components";

export const HeaderContainer = styled.nav`
    line-height: 22px;
    font-weight: 500;
    width : 99.8%;
    height : 25%;
    margin : auto;
    font-size: 15px;
    background: ${({ theme }) => theme.primaryGradient};
    color : ${({ theme }) => theme.primaryLight};
    display : grid;
    grid-template-columns : 0.5fr 4fr 8fr 0.5fr;
    align-items : end;
`;