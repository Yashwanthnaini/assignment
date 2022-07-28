import { 
        Ulist, 
        LItem 
    } from "../MiddleFooter.style";
const addInfoLinks = [
    {
        name: "FAQ"
    },
    {
        name : "Contact Us"
    },
    {
        name: "About Us"
    },
    {
        name : "Terms of Use"
    },
    {
        name : "Privacy"
    }
]

const AddInfo = () => {
    return ( 
        <div>
            <Ulist>
               {
                addInfoLinks.map(link => {
                    return <LItem key={link.name}><strong>&gt;</strong>&nbsp;{link.name}</LItem>
                })
               }
            </Ulist>
        </div>
     );
}
 
export default AddInfo;