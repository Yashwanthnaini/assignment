
import {EIContainer, EISection, EILabel, IPBox, SelectedOption, SOBox, Input, EInfo} from "./BigInputBox.style";

const BigInputBox = ({count}) => {
    const name = `Group ${count+1}`;
    return ( 
    <EIContainer>
        <EISection>
            <IPBox>
                <SelectedOption >
                    <SOBox >
                        <Input  default-value={name} value="Group"/>
                    </SOBox>
                </SelectedOption>
            </IPBox>     
        </EISection>
    </EIContainer>
     );
}
 
export default BigInputBox;