import CheckBox from "../../InputBox/CheckBox/CheckBox";

const ipBoxes = [
    {
        name: "Show 3D",
        title: "SHOW 3D",
        message : "Tells ChartGo to display the Chart using a 3d perspective."
    },
    {
        name : "Gridlines",
        title : "GRIDLINES",
        message: "Display gridlines in the plot background."
    },
    {
        name : "Legend",
        title : "LEGEND",
        message: "Displays a legend when you have multiple data groups or when you have a pie chart."
    },
    {
        name : "Show Values",
        title : "SHOW VALUES",
        message : "Display the numeric Y values on each bar, line or slice."
    },
    {
        name : "Color Plot Only",
        title : "COLOR PLOT ",
        message : "Specifies that the background color should only appear inside the plot area."
    }
]

const SectionFour = () => {
    return (  
        <>
            {ipBoxes.map((ipBox, index) => {
                return <CheckBox key={index} name={ipBox.name} title={ipBox.title} message={ipBox.message}/>
            }
            )}
        </>
    );
}
 
export default SectionFour ;