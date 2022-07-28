
import {EIContainer, EISection, EILabel, IPBox, SelectedOption, SOBox, Input, EInfo} from "./Empty.style";

const Empty = ({name}) => {

    return ( 
    <EIContainer>
        <EISection>
            <EILabel>
                {name}
            </EILabel>
            <IPBox>
                <SelectedOption >
                    <SOBox >
                        <Input name={name} />
                    </SOBox>
                </SelectedOption>
            </IPBox>     
        </EISection>
        
    </EIContainer>
     );
}
 
export default Empty;