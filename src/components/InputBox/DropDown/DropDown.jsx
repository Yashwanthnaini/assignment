import {useState} from 'react';
import Arrow from "../../../assets/dropdownarrow.png";


import {DDContainer, DDSection, DDLabel, DropDown, SelectedOption, SOBox, Link, ArrowImg, Label, UList, LItem, IDInfo} from "./DropDown.style";

const DropDownInput = ({IpArray , name}) => {

    const [selected, setSelected] = useState(IpArray[0]);
    const [openDropDown, setOpenDropDown] = useState(false);

    const handleOpenDropDown = () => {
        setOpenDropDown(!openDropDown);
    } 

    const handleSelect = (item) => {
        setSelected(item);
        setOpenDropDown(!openDropDown);
    }


    return ( 
    <DDContainer>
        <DDSection>
            <DDLabel>
                {name}
            </DDLabel>
            <DropDown>
                <SelectedOption onClick={() => { handleOpenDropDown();}}>
                    <SOBox onClick={() => { handleOpenDropDown();}}>
                        <Link>
                            <Label >{selected}</Label>
                        </Link>
                        <ArrowImg src={Arrow} alt="arrow" />
                    </SOBox>
                </SelectedOption>
                <UList openDropDown={openDropDown}>

                    {IpArray.map((item, index) => {
                        return (
                            <LItem key={index} onClick={() => { handleSelect(item);}}>
                                <Label>{item}</Label>
                            </LItem>
                        )
                    }
                    )}
                </UList>
            </DropDown>     
        </DDSection>
        <IDInfo id="Info">
            <p>i</p>
        </IDInfo>
    </DDContainer>
     );
}
 
export default DropDownInput;