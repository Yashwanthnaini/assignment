import CheckBox from "../../InputBox/CheckBox/CheckBox";

const ipBoxes = ["Gradient Color", "Trasparent", "Shadow", "Border", "Round Corners"]

const SectionFour = () => {
    return (  
        
        <>
            {ipBoxes.map((ipBox, index) => {
                return <CheckBox key={index} name={ipBox} />
            }
            )}
        </>
    );
}
 
export default SectionFour ;