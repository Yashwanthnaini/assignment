import {useState} from 'react';
import SectionOne from "../../Sections/SectionOne/SectionOne";
import SectionTwo from "../../Sections/SectionTwo/SectionTwo";
import SectionThree from "../../Sections/SectionThree/SectionThree";
import SectionFour from "../../Sections/SectionFour/SectionFour";
import SectionFive from "../../Sections/SectionFive/SectionFive";
import {FTContainer, TotalFieldSet, FTHeader, FTHeaderData, FTFieldSet, FTCBFieldSet, FTFieldData} from "./FirstTable.style";

const FirstTable = () => {

    const [isOpen, setIsOpen] = useState(true);

    const handleIsOpen = () => {
        setIsOpen(!isOpen);
    }

    return ( 
        <FTContainer >
            <FTHeader onClick={() => { handleIsOpen();}}>
                Chart Settings
                <FTHeaderData>
                </FTHeaderData>
            </FTHeader>
            <TotalFieldSet isOpen={isOpen}  >
                <FTFieldSet>
                    <FTFieldData>
                        <SectionOne />
                    </FTFieldData>
                    <FTFieldData>
                        <SectionTwo />
                    </FTFieldData>
                    <FTFieldData>
                        <SectionThree />
                    </FTFieldData>
                </FTFieldSet>
                <FTCBFieldSet>
                    <FTFieldData>
                        <SectionFour />
                    </FTFieldData>
                    <FTFieldData>
                        <SectionFive />
                    </FTFieldData>
                </FTCBFieldSet>
            </TotalFieldSet>
        </FTContainer>
     );
}

export default FirstTable;