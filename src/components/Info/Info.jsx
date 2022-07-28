import iconChart from "../../assets/iconchart.png";
import {InfoArea, InfoContainer, InfoText, AddBox, Image ,Strong} from "./Info.style";
const Info = () => {
    return ( 
        <InfoArea>
            <InfoContainer>
                <InfoText>
                        <Image src={iconChart} alt="icon chart Logo" />
                        <Strong>Online Graph Maker</Strong> ChartGo is an easy to use chart tool. To start, select your graph type and the appearance of your graph. Then enter your data and hit the create button. For more options, visit the different graph types in the menu.
                </InfoText>
            </InfoContainer>
            <AddBox></AddBox>
        </InfoArea>
        
     );
}
 
export default Info;