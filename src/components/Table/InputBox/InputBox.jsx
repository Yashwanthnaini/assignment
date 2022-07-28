import downArrow from "../../../assets/downarrow.png";
import dropDownArrow from "../../../assets/dropdownarrow.png";
import {IBContainer, IBLabel,FlexBox, DropBox, Label, IconBox, IBInfo, ArrowImg} from "./InputBox.style";
const InputBox = () => {
    return ( 
        <IBContainer>
            <IBLabel>
                Width
            </IBLabel>
            <FlexBox>
                <DropBox>
                    <Label>700</Label>
                    <IconBox>
                        <ArrowImg src={dropDownArrow} alt="dropDownArrow" />
                    </IconBox>
                </DropBox>
                <IBInfo> 
                    i
                </IBInfo>
            </FlexBox>
            
        </IBContainer>
     );
}
 
export default InputBox;