
import {EIContainer, EISection, EILabel, IPBox, SelectedOption, SOBox, Input, EInfo, P} from "./TransparentBox.style";

const TransparentBox = ({name}) => {

    return ( 
    <EIContainer>
        <EISection>
            <IPBox>
                <SelectedOption >
                    <SOBox >
                        <P>GROUPS</P>
                    </SOBox>
                </SelectedOption>
            </IPBox>     
        </EISection>
    </EIContainer>
     );
}
 
export default TransparentBox;