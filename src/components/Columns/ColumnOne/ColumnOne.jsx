import BigBox from "../../InputBox/BigBox/BigBox";
import TransparentBox from "../../TransparentBox/TransparentBox";
import {
        ColumnOneContainer
                            } from "./ColumnOne.style";

const ColumnOne = () => {
    const message = 'Chart' + '\r\n' + 'Futures' + '\r\n' + 'Fund'+ '\r\n' + 'Stock' + '\r\n' + 'Gold' + '\r\n' + 'Forex' ;

    return ( 
        <ColumnOneContainer>
            <BigBox  name="X Data" message={message}/>
            <TransparentBox />
        </ColumnOneContainer>
     );
}
 
export default ColumnOne;