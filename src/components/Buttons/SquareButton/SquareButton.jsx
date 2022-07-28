import {
        Button
            } from "./SquareButton.style";

const SquareButton = ({name}) => {
    return ( 
        <div>
            <Button>
                {name}
            </Button>
        </div>
     );
}
 
export default SquareButton;