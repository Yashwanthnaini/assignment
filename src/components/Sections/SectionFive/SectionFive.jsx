import CheckBox from "../../InputBox/CheckBox/CheckBox";
const ipBoxes = [
    {
        name: "Gradient Color",
        title: "GRADIENT COLOR",
        message: "Gives bars, areas and pie slices a gradient color."
    },
    {
        name: "Transparent",
        title: "TRANSPARENT",
        message: "Gives bars, areas and pie slices a transparent look."
    },
    {
        name: "Shadow",
        title: "SHADOW",
        message : "Adds a shadow to the image"
    },
    {
        name: "Border",
        title: "BORDER",
        message : "Display a border around the image"
    },
    {
        name: "Rounded Corners",
        title: "ROUNDED CORNERS",
        message : "The four corners of the chart image will have round edges."
    }
]

const SectionFive = () => {
    return (  
        <>
            {ipBoxes.map((ipBox, index) => {
                return <CheckBox key={index} name={ipBox.name} title={ipBox.title} message={ipBox.message}/>
            }
            )}
        </>
    );
}
 
export default SectionFive;