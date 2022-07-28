import ImageDropDown from "../../InputBox/ImageDropDown/ImageDropDown"
import DropDownInput from "../../InputBox/DropDown/DropDown";
import ColorDropDown from "../../InputBox/ColorDropDown/ColorDropDown";
import ToolTipBox from "../../ToolTipBox/ToolTipBox";

import {SectionOneContainer , EInfo} from "./SectionOne.style";

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
    

const numFields = [
    {
        name: "Width",
        title: "WIDTH",
        message: "Tells ChartGo how wide you want your chart to be. Size in pixels.",
    },
    {
        name: "Height",
        title: "HEIGHT",
        message: "Tells ChartGo how high you want your chart to be. Size in pixels.",
    }
]

const nameFields = [
    {
        name: "Label Orientation",
        title: "LABEL ORIENTATION",
        message: "Specifies the direction in which your x labels will print.",
        array : {labelOrientation}
    }
]

const SectionOne = () => {
    return ( 
        <>
            <ImageDropDown />
            {
                numFields.map((field, index) => {
                    return (
                        <SectionOneContainer key = {index}>
                            <DropDownInput name={field.name} IpArray={numIp} />
                            <EInfo id="Info">
                                <ToolTipBox title={field.title} field="" message={field.message} />
                            </EInfo>
                        </SectionOneContainer>
                    )
                    }
                )
            }
        <ColorDropDown IpArray={backgroundColor} name="Background Color" />
        {
                nameFields.map((field, index) => {
                    return (
                        <SectionOneContainer key = {index}>
                            <DropDownInput name={field.name} IpArray={labelOrientation} />
                            <EInfo id="Info">
                                <ToolTipBox title={field.title} field="" message={field.message} />
                            </EInfo>
                        </SectionOneContainer>
                    )
                    }
                )
        }
        </>
     );
}
 
export default SectionOne;