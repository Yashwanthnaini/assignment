import styled from "styled-components";

export const InfoArea = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const InfoContainer = styled.div`
    width : 450px;
    float:left;
    margin-top: 20px;
    margin-left: 40px;
`;

export const Image = styled.img`
    height: 80px;
    width: auto;
    float: left;
    margin : 0px 10px 0px 0px;
`;

export const Strong = styled.strong`
    color: ${({ theme }) => theme.info.color};
    font-size: ${({ theme }) => theme.info.fontSize};
    font-weight: ${({ theme }) => theme.info.fontWeight};
`;

export const AddBox = styled.div`
    width: 700px;
`;