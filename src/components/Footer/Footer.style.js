import styled from "styled-components";
import background from "../../assets/h-line.png";

export const FooterContainer = styled.div`
    width: 99.9%;
    margin : 0 auto;
    background: -webkit-radial-gradient(circle,#3b3b3b,#222);
    color: ${({ theme }) => theme.primaryLight};
    height: 100%;
    padding-bottom: 10px;
`;