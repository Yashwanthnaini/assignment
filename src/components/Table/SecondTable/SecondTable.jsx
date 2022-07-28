import {useState} from 'react';
import ColumnOne from '../../Columns/ColumnOne/ColumnOne';
import ColumnTwo from '../../Columns/ColumnTwo/ColumnTwo';
import ColumnThree from '../../Columns/ColumnThree/ColumnThree';
import Plus from "../../../assets/plus.png";
import Minus from "../../../assets/minus.png";
import {STContainer, TotalFieldSet, STHeader, STHeaderData, STFieldSet, STFieldData , PlusImg, MinusImg, P} from "./SecondTable.style";
const SecondTable = () => {

    const [count ,setCount] = useState(0);

    const handlePlus = () => {
        if(count < 4 && count >= 0){
            setCount(count + 1);
        }
    }

    const handleMinus = () => {
        if(count > 0 && count <= 4){
            setCount(count - 1);
        }
    }
     


    const message = '600' + '\r\n' + '200' + '\r\n' + '300'+ '\r\n' + '400' + '\r\n' + '300' + '\r\n' + '200' ;

    
    const [isOpen, setIsOpen] = useState(true);

    const handleIsOpen = () => {
        setIsOpen(!isOpen);
    }

    const renderObjects = () => {
        let objects = [];
        for(let i = 0; i < count; i++){
            objects.push(
            <STFieldData>
                <ColumnTwo />
            </STFieldData>
            );
        }
        return objects;
    }


    return ( 
        <STContainer >
            <STHeader onClick={() => { handleIsOpen();}}>
                Chart Settings
                <STHeaderData>
                    <P>Rules</P>
                    <P>Example</P>
                    <P>Excel</P>
                </STHeaderData>
            </STHeader>
            <TotalFieldSet isOpen={isOpen}  >
                <STFieldSet >
                    <STFieldData>
                        <ColumnOne  />
                    </STFieldData>
                    <STFieldData>
                        <ColumnTwo message= {message}  count={count} />
                    </STFieldData>
                    {
                        renderObjects()  
                    }
                    {
                        count == 4 ? null : (
                            <PlusImg src={Plus} alt="plus"  onClick={
                                () => {
                                    handlePlus();
                                }
                            }/>
                        )
                    }
                    
                    {
                        count > 0 && count < 5 ?
                        (
                            <MinusImg src={Minus} alt="minus"
                                onClick={
                                    () => {
                                        handleMinus();
                                    }
                                }
                            />
                        ) : null
                    }
                    
                </STFieldSet>
            </TotalFieldSet>
        </STContainer>
     );
}

export default SecondTable;