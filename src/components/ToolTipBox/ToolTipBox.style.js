import styled from "styled-components";
import closeBtn from "../../assets/closeBtn.png";

export const TTContainer = styled.div`
    display: ${(props) => (props.show ? "block" : "none")};
    width: ${(props) => (props.show ? "200px" : "0px")};
    z-index: 50000;
    position: absolute;
    right: 0px;
    bottom: 70px;
    background: #555;
    border: 2px solid #444;
    margin: 0;
    padding: 6px 12px;
    border-radius: 0px 12px 0px 12px;
    box-shadow: 2px 2px 3px #3232323d;
    outline: 0;
    font: 13px 'Open Sans',sans-serif;
`;

export const TTP = styled.p`
    position: relative;
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: #fff;

`;

export const CrossMark = styled.a`
    display: block;
    height: 32px;
    width: 32px;
    background : url(${closeBtn}) no-repeat center ;
    text-indent: -9999px;
    outline: 0;
    position: absolute;
    bottom: -20px;
    right: -30px;
    cursor: pointer;
    margin: 2px;
    padding: 2px;
`;