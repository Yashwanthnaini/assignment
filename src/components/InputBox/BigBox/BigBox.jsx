import Plus from "../../../assets/plus.png";
import {EIContainer, EISection, EILabel, IPBox, SelectedOption, SOBox, TextArea, EInfo} from "./BigBox.style";

const Empty = ({message, name}) => {

    return ( 
    <EIContainer>
        <EISection>
            <EILabel>
                {name}
                <img src={Plus} alt="plusSymbol" />
            </EILabel>
            <IPBox>
                <SelectedOption >
                    <SOBox >
                        <TextArea name="xaxis" rows="6" columns="5" >
                            {message}
                        </TextArea>
                    </SOBox>
                </SelectedOption>
            </IPBox>     
        </EISection>
    </EIContainer>
     );
}
 
export default Empty;