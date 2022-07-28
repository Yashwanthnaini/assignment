import TopFooter from "./TopFooter/TopFooter";
import MiddleFooter from "./MiddleFooter/MiddleFooter";
import BottomFooter from "./BottomFooter/BottomFooter";
import {
        FooterContainer
                        } from "./Footer.style";

const Footer = () => {
    return ( 
        <>
            <TopFooter />
            <FooterContainer>
                <MiddleFooter />
                <BottomFooter />
            </FooterContainer>
        </>
     );
}
 
export default Footer;