
import LogoBox from "./LogoBox/LogoBox";
import HeaderList from "./HeaderList/HeaderList";
import {
        HeaderContainer
                    } from "./Header.style";

const Header = () => {
    return ( 
        <HeaderContainer>
            <div></div>
            <LogoBox />
            <HeaderList />
            <div></div>
        </HeaderContainer>
     );
}
 
export default Header;