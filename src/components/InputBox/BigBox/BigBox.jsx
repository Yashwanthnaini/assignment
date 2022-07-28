
import {
        EIContainer, 
        EISection, 
        EILabel, 
        IPBox, 
        SelectedOption, 
        SOBox, 
        TextArea
                } from "./BigBox.style";

const Empty = ({message, name}) => {
    return ( 
    <EIContainer>
        <EISection>
            <EILabel>
                {name}
            </EILabel>
            <IPBox>
                <SelectedOption >
                    <SOBox >
                        <TextArea default-value="" name="xaxis" rows="6" columns="5" >
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