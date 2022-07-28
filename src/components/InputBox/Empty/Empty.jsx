import ToolTipBox from "../../ToolTipBox/ToolTipBox";
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
        <EInfo id="Info">
            <ToolTipBox title="Optional" field="char " message="write it buddy" />
        </EInfo>
    </EIContainer>
     );
}
 
export default Empty;