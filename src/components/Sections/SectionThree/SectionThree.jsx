import DropDown from "../../InputBox/DropDown/DropDown";
import Empty from "../../InputBox/Empty/Empty";

const font = ["Bold", "Normal", "Italic", "Bold Italic"];

const Ips = ["Max Y" , "Min Y" , "Threshold"];

const SectionThree = () => {
    return ( 
        <>
            <DropDown IpArray={font} name="Title Font" />
            <DropDown IpArray={font} name="Label Font" />
            {
                Ips.map((ip, index) => {
                    return <Empty name={ip} key={index} />
                })
            }
        </>

     );
}
 
export default SectionThree;