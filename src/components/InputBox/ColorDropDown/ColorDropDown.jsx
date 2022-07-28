import {useState} from 'react';
import Arrow from "../../../assets/dropdownarrow.png";


import {CDDContainer, CDDSection, CDDLabel, CDropDown, SelectedOption, SOBox, Link, ArrowImg, Label, UList, LItem, IDInfo} from "./ColorDropDown.style";

const ColorDropDownInput = ({IpArray , name}) => {
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
    <CDDContainer>
        <CDDSection>
            <CDDLabel>
                {name}
            </CDDLabel>
            <CDropDown>
                <SelectedOption onClick={() => { handleOpenDropDown();}}>
                    <SOBox onClick={() => { handleOpenDropDown();}}>
                        <Link>
                            <Label >{selected.name}</Label>
                        </Link>
                        <ArrowImg src={Arrow} alt="arrow" />
                    </SOBox>
                </SelectedOption>
                <UList openDropDown={openDropDown}>

                    {IpArray.map((item, index) => {
                        return (
                            <LItem style={{backgroundColor: item.value}} key={index} onClick={() => { handleSelect(item);}}>
                                <Label>{item.name}</Label>
                            </LItem>
                        )
                    }
                    )}

                </UList>
            </CDropDown>     
        </CDDSection>
        <IDInfo id="Info">
            <p>i</p>
        </IDInfo>
    </CDDContainer>
     );
}
 
export default ColorDropDownInput;