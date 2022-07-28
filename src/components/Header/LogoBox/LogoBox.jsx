import {LogoGrid, LogoImg, LogoText} from "./LogoBox.style"
import Logo from "../../../assets/logo.png";

const LogoBox = () => {
    return ( 
        <LogoGrid>
            <LogoImg src={Logo} alt="logo" width={100} />
            <LogoText>Create Graphs Online</LogoText>
        </LogoGrid>
     );
}
 
export default LogoBox;