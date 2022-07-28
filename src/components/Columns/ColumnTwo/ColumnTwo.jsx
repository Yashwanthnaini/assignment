import BigBox from "../../InputBox/BigBox/BigBox";
import BigInputBox from "../../InputBox/BigInputBox/BigInputBox";
import BigColorDropDown from "../../InputBox/BigColorDropDown/BigColorDropDown";
import {CTContainer} from "./ColumnTwo.style"

const Color = [
    {name: "Default Color" , value: "#ffffff"},
    {name: "Blue", value: "#0000ff"},
    {name: "Red", value: "#ff0000"},
    {name: "Green", value: "#00ff00"},
    {name: "Gray", value: "#808080"},
    {name: "White", value: "#ffffff"},
    {name: "Black", value: "#000000"},
    {name: "Purple", value: "#800080"},
    {name: "Orange", value: "#ffa500"}
]

const ColumnTwo = ({message}) => {
    

    return (
        <CTContainer>
            <BigBox  name="Y Data" message={message}/>
            <BigInputBox name="Group" />
            <BigColorDropDown IpArray={Color}/> 
        </CTContainer> 
        
     );
}
 
export default ColumnTwo;