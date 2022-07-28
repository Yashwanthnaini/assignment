import HomeMenu from "./HomeMenu/HomeMenu";
import AddInfo from "./AdditionalInfo/AdditionalInfo";
import FollowUs from "./FollowUs/FollowUs";
import ProCharts from "./ProfessionalCharts/ProfessionalCharts";

import { 
        MFooterContainer, 
        FlexDivOne, 
        FlexDivTwo, 
        P,
        LangLink
                } from "./MiddleFooter.style"

const Languages = [
    {
        name : "English"
    },
    {
        name : "Français"
    },
    {
        name : "Español"
    }
]
const MiddleFooter = () => {
    return ( 
        <MFooterContainer>
            <FlexDivOne>
                <div>
                    <P>Home Menu</P>
                    <HomeMenu />
                </div>

                <div>
                    <P>Additional Info</P>
                    <AddInfo />
                </div>

                <div>
                    <P>Follow Us&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</P>
                    <FollowUs />
                </div>

                <div>
                    <P>Profession Charts</P>
                    <ProCharts />
                </div>
                
            </FlexDivOne>
            <FlexDivTwo>
                <P>Languages</P>
               {Languages.map(lang =>{
                    return <LangLink key={lang.name}>{lang.name}</LangLink>
               })}
            </FlexDivTwo>
        </MFooterContainer>
     );
}
 
export default MiddleFooter;