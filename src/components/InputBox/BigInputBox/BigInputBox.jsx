
import {EIContainer, EISection, EILabel, IPBox, SelectedOption, SOBox, Input, EInfo} from "./BigInputBox.style";

const BigInputBox = ({name}) => {

    return ( 
    <EIContainer>
        <EISection>
            <IPBox>
                <SelectedOption >
                    <SOBox >
                        <Input name={name} value="Group 1"/>
                    </SOBox>
                </SelectedOption>
            </IPBox>     
        </EISection>
    </EIContainer>
     );
}
 
export default BigInputBox;