import FirstTable from "./FirstTable/FirstTable";
import SecondTable from "./SecondTable/SecondTable";

import {TableContainer, TableForm, FirstTableContainer, SecondTableContainer} from "./Table.style";

const Table = () => {
    return ( 
        <TableContainer>
            <TableForm>
                <FirstTableContainer>
                        <FirstTable />
                </FirstTableContainer>

                <FirstTableContainer>
                        <SecondTable />
                </FirstTableContainer>
                
            </TableForm>
        </TableContainer>
     );
}
 
export default Table;