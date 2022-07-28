import CheckBox from "../../InputBox/CheckBox/CheckBox";

const ipBoxes = ["Show 3D", "Guidelines", "Legend", "Show Values", "Color Plot Only"]

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