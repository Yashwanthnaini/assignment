import {
    Button
        } from "./SilverButton.style";

const SilverButton = ({name}) => {
return ( 
    <div>
        <Button>
            {name}
        </Button>
    </div>
 );
}

export default SilverButton;