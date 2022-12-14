import Facebook from "../../../../assets/social-facebook.png";
import Twitter from "../../../../assets/social-twitter.png";
import Youtube from "../../../../assets/social-youtube.png";
import { 
    FlexDiv 
            } from "./FollowUs.style";
            
const FollowUs = () => {
    return ( 
        <FlexDiv>
            <img src={Facebook} alt="Facebook" />
            <img src={Twitter} alt="Twitter" />
            <img src={Youtube} alt="Youtube" />
        </FlexDiv>
     );
}
 
export default FollowUs;