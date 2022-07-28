import Empty from "../../InputBox/Empty/Empty";
import ToolTipBox from "../../ToolTipBox/ToolTipBox";
import {SectionTwoContainer , EInfo} from "./SectionTwo.style";

const ipFields = [
    {
        name: "Title",
        title: "CHART TITLE",
        field: "Optional field",
        message: "Whatever you enter here appeares as a title on top of the chart."
    },
    {
        name: "Subtitle",
        title: "SUBTITLE",
        field: "Optional field",
        message: "Whatever you enter here appeares as a subtitle on top of the chart."
    },
    {
        name: "X-TITLE",
        title: "X TITLE",
        field: "Optional field",
        message: "Whatever you enter here appeares under the X axis."
    },
    {
        name: "Y-TITLE",
        title: "Y TITLE",
        field: "Optional field",
        message: "Whatever you enter here appeares beside the Y axis."
    },
    {
        name: "Source",
        title: "SOURCE",
        field: "Optional field",
        message: "Use this if you want to specify a source for your data. It appears in the bottom right corner of the chart."
    }
];

const SectionTwo = () => {
    return ( 
            <>
            {
                ipFields.map((field, index) => {
                    return (
                        <SectionTwoContainer>
                            <Empty key={index} name={field.name} />
                            <EInfo id="Info">
                                <ToolTipBox title={field.title} field={field.field} message={field.message} />
                            </EInfo>
                        </SectionTwoContainer>
                    )
                    }
                )
            }
            </>
     );
}
 
export default SectionTwo;