import {
        BIContainer, 
        BISection, 
        IPBox, 
        SelectedOption, 
        SOBox, 
        Input
                } from "./BigInputBox.style";

const BigInputBox = ({count}) => {
    const name = `Group ${count+1}`;
    return ( 
    <BIContainer>
        <BISection>
            <IPBox>
                <SelectedOption >
                    <SOBox >
                        <Input  default-value={name} value="Group"/>
                    </SOBox>
                </SelectedOption>
            </IPBox>     
        </BISection>
    </BIContainer>
     );
}
 
export default BigInputBox;