import {useState} from 'react';
import ToolTipBox from "../../ToolTipBox/ToolTipBox";

import {DDContainer, DDSection, DDLabel, DropDown, SelectedOption, SOBox, Link, CBox, UCBox, Span, Label, IDInfo} from "./CheckBox.style";

const CheckBox = ({name,title,message}) => {

    const [selected, setSelected] = useState(false);

    const handleSelected = () => {
        setSelected(!selected);
    } 

    return ( 
    <DDContainer>
         <SOBox onClick={() => { handleSelected();}}>
            {selected ?   
                <CBox>
                    <Span>✓</Span>
                </CBox>
                :
                <UCBox>
                    <Span></Span>
                </UCBox>
            }
                <Link>
                    <Label >{name}</Label>
                </Link>
        </SOBox>
        <IDInfo id="Info">
            <ToolTipBox title={title} field="" message={message} />
        </IDInfo>
    </DDContainer>
     );
}
 
export default CheckBox;