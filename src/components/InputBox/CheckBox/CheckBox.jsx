import {useState} from 'react';
import ToolTipBox from "../../ToolTipBox/ToolTipBox";

import {
        CBContainer, 
        SOBox, 
        Link, 
        CBox, 
        UCBox, 
        Span, 
        Label, 
        CBInfo
                } from "./CheckBox.style";

const CheckBox = ({name,title,message}) => {

    const [selected, setSelected] = useState(false);

    const handleSelected = () => {
        setSelected(!selected);
    } 

    return ( 
    <CBContainer>
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
        <CBInfo id="Info">
            <ToolTipBox title={title} field="" message={message} />
        </CBInfo>
    </CBContainer>
     );
}
 
export default CheckBox;