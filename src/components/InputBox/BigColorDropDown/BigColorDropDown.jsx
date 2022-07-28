import {useState} from 'react';
import Arrow from "../../../assets/dropdownarrow.png";


import {CDDContainer, CDDSection, CDDLabel, CDropDown, SelectedOption, SOBox, Link, ArrowImg, Label, UList, LItem, IDInfo} from "./BigColorDropDown.style";

const BigColorDropDown = ({IpArray}) => {
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
    </CDDContainer>
     );
}
 
export default BigColorDropDown;