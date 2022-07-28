import {
        NavLinksFlexBox, 
        UnList, 
        LItem
                } from "./HeaderList.style";

const Links = [
    {
        name: "Home"
    },
    {
        name: "Create Chart"
    },
    {
        name: "Bar Chart"
    },
    {
        name: "Line Chart"
    },
    {
        name: "Pie Chart"
    },
    {
        name: "Area Chart"
    },
    {
        name: "Result"
    }
]

const HeaderList = () => {
    return ( 
        <NavLinksFlexBox>
            <UnList>
                {
                    Links.map(link => {
                        if(link.name == "Create Chart")
                        {
                            return( 
                                <LItem  
                                    key={link.name}
                                    style={{background : "#545454", color : "#FD814B", borderRadius : "2px"}}
                                >
                                    {link.name}
                                </LItem>
                            )
                        }
                        return( 
                            <LItem key={link.name}>
                                {link.name}
                            </LItem>
                        )
                    })
                }
            </UnList>
        </NavLinksFlexBox>
     );
}
 
export default HeaderList;