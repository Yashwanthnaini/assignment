import {useState} from 'react';

import {TTContainer, TTP, CrossMark} from "./ToolTipBox.style";
const ToolTipBox = ({title, field, message}) => {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
    }

    return ( 
        <div>
            <p onClick={handleClick}>i</p>
        <TTContainer show={show}>
            <TTP>
                {title}
               
                {
                    field == "" ? "" :  <br />
                }
                {field}
                <br />
                {message}
                <CrossMark  onClick={handleClick} >
                    close
                </CrossMark>
            </TTP>
        </TTContainer>

        </div>
     );
}
 
export default ToolTipBox;