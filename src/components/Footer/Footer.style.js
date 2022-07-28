import styled from "styled-components";

export const FooterContainer = styled.div`
    width: 99.9%;
    margin : 0 auto;
    background: ${({ theme }) => theme.footer.bottom.bgColor};
    color: ${({ theme }) => theme.footer.bottom.textColor};
    height: 100%;
    padding-bottom: 10px;
`;