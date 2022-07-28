import {useState, useRef} from 'react';
import {useOnClickOutside} from '../../../Hooks/hooks';
import Arrow from "../../../assets/dropdownarrow.png";
import ToolTipBox from '../../ToolTipBox/ToolTipBox';

import {
        CDDContainer, 
        CDDSection, 
        CDDLabel, 
        CDropDown, 
        SelectedOption, 
        SOBox, 
        Link, 
        ArrowImg, 
        Label, 
        UList, 
        LItem, 
        CDInfo
                } from "./ColorDropDown.style";

const ColorDropDownInput = ({IpArray , name}) => {
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
    <CDDContainer>
        <CDDSection>
            <CDDLabel>
                {name}
            </CDDLabel>
            <CDropDown ref={node}>
                <SelectedOption   onClick={() => { handleOpenDropDown();}}>
                    <SOBox onClick={() => { handleOpenDropDown();}}>
                        <Link>
                            <Label >{selected.name}</Label>
                        </Link>
                        <ArrowImg src={Arrow} alt="arrow" />
                    </SOBox>
                </SelectedOption>
                <UList  openDropDown={openDropDown}>

                    {IpArray.map((item, index) => {
                        return (
                            <LItem ref={node} style={{backgroundColor: item.value}} key={index} onClick={() => { handleSelect(item);}}>
                                <Label>{item.name}</Label>
                            </LItem>
                        )
                    }
                    )}
                </UList>
            </CDropDown>     
        </CDDSection>
        <CDInfo id="Info">
            <ToolTipBox title="BACKGROUND COLOR" field="" message="Tells ChartGo what color to use for the background of the chart." />
        </CDInfo>
    </CDDContainer>
     );
}
 
export default ColorDropDownInput;