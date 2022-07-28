import {useState} from 'react';
import ColumnOne from '../../Columns/ColumnOne/ColumnOne';
import ColumnTwo from '../../Columns/ColumnTwo/ColumnTwo';
import ColumnThree from '../../Columns/ColumnThree/ColumnThree';
import {STContainer, TotalFieldSet, STHeader, STHeaderData, STFieldSet, STFieldData} from "./SecondTable.style";
const SecondTable = () => {

    const pc = 0;

    const message = '600' + '\r\n' + '200' + '\r\n' + '300'+ '\r\n' + '400' + '\r\n' + '300' + '\r\n' + '200' ;

    
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
                        <ColumnTwo message= {message} />
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