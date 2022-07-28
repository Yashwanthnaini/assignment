import {useState, useRef} from 'react';
import {useOnClickOutside} from '../../../Hooks/hooks';
import Arrow from "../../../assets/dropdownarrow.png";

import {
        BCDDSection,
        BCDropDown, 
        SelectedOption, 
        SOBox, 
        Link, 
        ArrowImg, 
        Label, 
        UList, 
        LItem
                } from "./BigColorDropDown.style";

const BigColorDropDown = ({IpArray}) => {
    const [selected, setSelected] = useState(IpArray[0]);

    const [openDropDown, setOpenDropDown] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpenDropDown(false));

    const handleOpenDropDown = () => {
        setOpenDropDown(!openDropDown);
    } 

    const handleSelect = (item) => {
        setSelected(item);
        setOpenDropDown(!openDropDown);
    }

    return ( 
        <BCDDSection>
            <BCDropDown ref={node}>
                <SelectedOption  onClick={() => { handleOpenDropDown();}}>
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
            </BCDropDown>     
        </BCDDSection>
     );
}
 
export default BigColorDropDown;