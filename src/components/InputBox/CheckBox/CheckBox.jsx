import {useState} from 'react';


import {DDContainer, DDSection, DDLabel, DropDown, SelectedOption, SOBox, Link, CBox, UCBox, Span, Label, IDInfo} from "./CheckBox.style";

const CheckBox = ({name}) => {

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
            <p>i</p>
        </IDInfo>
    </DDContainer>
     );
}
 
export default CheckBox;