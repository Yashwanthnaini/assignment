import Logo from "../../../assets/logo.png";
import {
        LogoGrid, 
        LogoImg, 
        LogoText
                } from "./LogoBox.style"


const LogoBox = () => {
    return ( 
        <LogoGrid>
            <LogoImg src={Logo} alt="logo" />
            <LogoText>Create Graphs Online</LogoText>
        </LogoGrid>
     );
}
 
export default LogoBox;