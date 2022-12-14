import DropDown from "../../InputBox/DropDown/DropDown";
import Empty from "../../InputBox/Empty/Empty";
import ToolTipBox from "../../ToolTipBox/ToolTipBox";
import {
        SectionContainer, 
        Info
                } from "../Sections.style";

const font = ["Bold", "Normal", "Italic", "Bold Italic"];

const ipFields = [
        {
            name: "Max Y",
            title: "MAX Y AXIS",
            field: "Optional field & Numeric field.",
            message: "Specifies how high you want the y axis to be. Leave blank for default."
        },
        {
            name: "Min Y",
            title: "MIN Y AXIS",
            field: "Optional field & Numeric field.",
            message: "Specifies how low you want the y axis to be. Leave blank for default."
        },
        {
            name: "Threshold",
            title: "THRESHOLD",
            field: "Optional field & Numeric field.",
            message: "Displays a dotted line on the y axis. Value must be between lowest and highest Y values."
        }
    ];

const fontFields = [
    {
        name: "Title Font",
        title: "TITLE FONT",
        message: "Specifies the font style of the title, sub title and x & y title."
    },
    {
        name: "Label Font",
        title: "LABEL FONT",
        message: "Specifies the font style of the label and legend."
    }
]


const SectionThree = () => {
    return ( 
        <>
            {
                fontFields.map((field, index) => {
                    return (
                        <SectionContainer key = {index}>
                            <DropDown IpArray={font} name={field.name} />
                            <Info id="Info">
                                <ToolTipBox title={field.title} field="" message={field.message} />
                            </Info>
                        </SectionContainer>
                    )
                    }
                )
            }
            {
                ipFields.map((field, index) => {
                    return (
                        <SectionContainer key={index}>
                            <Empty  name={field.name} />
                            <Info id="Info">
                                <ToolTipBox title={field.title} field={field.field} message={field.message} />
                            </Info>
                        </SectionContainer>
                    )
                    }
                )
            }
        </>

     );
}
 
export default SectionThree;