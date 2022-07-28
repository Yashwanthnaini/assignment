import {useState} from 'react';
import ColumnOne from '../../Columns/ColumnOne/ColumnOne';
import ColumnTwo from '../../Columns/ColumnTwo/ColumnTwo';
import ColumnThree from '../../Columns/ColumnThree/ColumnThree';
import {STContainer, TotalFieldSet, STHeader, STHeaderData, STFieldSet, STFieldData} from "./SecondTable.style";
const SecondTable = () => {
    
    const [isOpen, setIsOpen] = useState(true);

    const handleIsOpen = () => {
        setIsOpen(!isOpen);
    }

    return ( 
        <STContainer >
            <STHeader onClick={() => { handleIsOpen();}}>
                Chart Settings
                <STHeaderData>
                    <p>Rules</p>
                    <p>Example</p>
                    <p>Excel</p>
                </STHeaderData>
            </STHeader>
            <TotalFieldSet isOpen={isOpen}  >
                <STFieldSet>
                    <STFieldData>
                        <ColumnOne />
                    </STFieldData>
                    <STFieldData>
                        <ColumnTwo />
                    </STFieldData>
                    <STFieldData>
                        <ColumnThree />
                    </STFieldData>
                </STFieldSet>
            </TotalFieldSet>
        </STContainer>
     );
}

export default SecondTable;