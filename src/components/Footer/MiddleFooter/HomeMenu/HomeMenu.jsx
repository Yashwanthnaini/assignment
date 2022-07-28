import {Ulist, LItem} from "./HomeMenu.style"
const homeMenuList = [
    {
        name : "Welcome"
    },
    {
        name : "Guide"
    },
    {
        name : "Examples"
    },
    {
        name : "Video Demos"
    },
    {
        name : "Blog"
    },
    {
        name : "Help"
    }
]

const HomeMenu = () => {
    return ( 
        <div>
            <Ulist>
                {
                    homeMenuList.map(list => {
                        return <LItem key={list.name}>
                                •&nbsp;{list.name}
                                </LItem>
                    })
                }
            </Ulist>
        </div>
     );
}
 
export default HomeMenu;