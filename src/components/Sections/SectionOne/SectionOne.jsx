import ImageDropDown from "../../InputBox/ImageDropDown/ImageDropDown"
import DropDownInput from "../../InputBox/DropDown/DropDown";
import ColorDropDown from "../../InputBox/ColorDropDown/ColorDropDown";


const numIp= [400,500,600,700,800,900,1000,1100,1200];


const backgroundColor = [
    {
        name: "Gradient Blue",
        value: "#00BFFF"
    },
    {
        name: "Blue",
        value: "#0000FF"
    },
    {
        name: "Gradient Silver",
        value: "#C0C0C0"
    },
    {
        name: "Silver",
        value: "#C0C0C0"
    }, 
    {
        name: "Gradient Gray",
        value: "#808080"
    },
    {
        name: "Gray",
        value: "#808080"
    },
    {
        name: "White",
        value: "#FFFFFF"
    },
    {
        name: "Gradient Black",
        value: "#000000"
    },
    {
        name: "Black",
        value: "#000000"
    },
    {
        name: "Gradient Purple",
        value: "#800080"
    },
    {
        name: "Purple",
        value: "#800080"
    },
    {
        name: "Gradient Red",
        value: "#FF0000"
    },
    {
        name: "Red",
        value: "#FF0000"
    },
    {
        name: "Gradient Orange",
        value: "#FFA500"
    },
    {
        name: "Orange",
        value: "#FFA500"
    },
    {
        name: "Gradient Green",
        value: "#008000"
    },  
    {
        name: "Green",
        value: "#008000"
    }
]
    
const labelOrientation = ["Horizontal", "Vertical" , "Diagonal"];
    

const SectionOne = () => {
    return ( 
        <>
        <ImageDropDown />
        <DropDownInput IpArray={numIp} name="Width" />
        <DropDownInput IpArray={numIp} name="Height" />
        <ColorDropDown IpArray={backgroundColor} name="Background Color" />
        <DropDownInput IpArray={labelOrientation} name="Label Orientation" />
        </>
     );
}
 
export default SectionOne;