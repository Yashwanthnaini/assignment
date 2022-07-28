import {useState, useRef} from 'react';
import {useOnClickOutside} from '../../../Hooks/hooks';
import Arrow from "../../../assets/dropdownarrow.png";


import {DDContainer, DDSection, DDLabel, DropDown, SelectedOption, SOBox, Link, ArrowImg, Label, UList, LItem, IDInfo} from "./DropDown.style";

const DropDownInput = ({IpArray , name}) => {

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
    <DDContainer>
        <DDSection>
            <DDLabel>
                {name}
            </DDLabel>
            <DropDown ref={node}>
                <SelectedOption   onClick={() => { handleOpenDropDown();}}>
                    <SOBox onClick={() => { handleOpenDropDown();}}>
                        <Link>
                            <Label >{selected}</Label>
                        </Link>
                        <ArrowImg src={Arrow} alt="arrow" />
                    </SOBox>
                </SelectedOption>
                <UList  openDropDown={openDropDown}>

                    {IpArray.map((item, index) => {
                        return (
                            <LItem ref={node} key={index} onClick={() => { handleSelect(item);}}>
                                <Label>{item}</Label>
                            </LItem>
                        )
                    }
                    )}
                </UList>
            </DropDown>     
        </DDSection>
    </DDContainer>
     );
}
 
export default DropDownInput;