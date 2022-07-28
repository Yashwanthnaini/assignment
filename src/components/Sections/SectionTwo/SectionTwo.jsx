import Empty from "../../InputBox/Empty/Empty";
const ipFields = ["Title", "Subtitle", "X Title", "Y Title", "Source"];

const SectionTwo = () => {
    return ( 
        <>
            
            {
                ipFields.map((field, index) => {
                    return (
                        <Empty key={index} name={field} />
                    )
                    }
                )
            }

        </>
     );
}
 
export default SectionTwo;