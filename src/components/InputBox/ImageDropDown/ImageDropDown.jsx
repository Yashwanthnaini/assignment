import {useState, useRef} from 'react';
import { useOnClickOutside } from '../../../Hooks/hooks';
import Arrow from "../../../assets/downarrow.png";
import Bar from "../../../assets/icon_bar.png";
import Line from "../../../assets/icon_line.png";
import Pie from "../../../assets/icon_pie.png";
import Area from "../../../assets/icon_area.png";
import ToolTipBox from "../../ToolTipBox/ToolTipBox"

import {
        IPContainer, 
        IPSection, 
        IPLabel, 
        DropDownContainer, 
        SelectedOption, 
        SOBox, 
        Link, 
        ArrowImg,  
        UList, 
        LItem, 
        Label,
        IDInfo
                } from "../Input.style";

const chartType = [
    {
        name: "Bar"
    },
    {
        name: "Line"
    },
    {
        name: "Pie"
    },
    {
        name: "Area"
    }
];


const ImageDropDown = () => {

    const [selected, setSelected] = useState(chartType[0]);
    const [openDropDown, setOpenDropDown] = useState(false);

    const node = useRef();
    useOnClickOutside(node, () => setOpenDropDown(false));

    const handleOpenDropDown = () => {
        setOpenDropDown(!openDropDown);
    } 

    const handleSelectOption = () => {
        switch (selected.name) {
            case "Bar":
                return <><img src={Bar} alt="bar"/><Label style={{color: "#FD814B"}}>Bar</Label></>
            case "Line":
                return <><img src={Line} alt="line"/><Label style={{color: "#FD814B"}}>Line</Label></>
            case "Pie":
                return <><img src={Pie} alt="pie"/><Label style={{color: "#FD814B"}}>Pie</Label></>
            case "Area":
                return <><img src={Area} alt="area"/><Label style={{color: "#FD814B"}}>Area</Label></>
            default:
                return <><img src={Bar} alt="bar"/><Label style={{color: "#FD814B"}}>Bar</Label></>
        }
    }

    const handleSelect = (item) => {
        setSelected(item);
        setOpenDropDown(!openDropDown);
    }

    return ( 
        <IPContainer>
            <IPSection>
                <IPLabel>
                    Chart Type
                </IPLabel>
                <DropDownContainer ref={node}>
                    <SelectedOption   onClick={() => { handleOpenDropDown();}}>
                            <SOBox onClick={() => { handleOpenDropDown();}}>
                            <Link>
                                {handleSelectOption()}
                            </Link>
                            <ArrowImg openDropDown={openDropDown} src={Arrow} alt="arrow" />
                        </SOBox>
                    </SelectedOption>
                    <UList  openDropDown={openDropDown}>

                        <LItem>
                            <Link onClick={() => { handleSelect(chartType[0])}} >
                                <img src={Bar} alt="bar" />
                                <Label>Bar</Label>
                            </Link>
                        </LItem>

                        <LItem onClick={() => { handleSelect(chartType[1])}} >
                            <Link>
                                <img src={Line} alt="bar" />
                                <Label>Line</Label>
                            </Link>
                        </LItem>

                        <LItem onClick={() => { handleSelect(chartType[2])}} >
                            <Link>
                                <img src={Pie} alt="bar" />
                                <Label>Pie</Label>
                            </Link>
                        </LItem>

                        <LItem onClick={() => { handleSelect(chartType[3])}} >
                            <Link>
                                <img src={Area} alt="bar" />
                                <Label>Area</Label>
                            </Link>
                        </LItem>

                    </UList>
                </DropDownContainer>     
            </IPSection>

            <IDInfo id="Info">
                <ToolTipBox title="CHART TYPE" field="" message="Tells ChartGo to create a bar, pie, line or area chart." />
            </IDInfo>

        </IPContainer>
     );
}
 
export default ImageDropDown;