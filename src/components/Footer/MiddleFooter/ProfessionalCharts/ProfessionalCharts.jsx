import { Ulist, LItem } from "../HomeMenu/HomeMenu.style";
import {Textwrap} from "./Professional.style";

const proChartsLinks  = [
    {
        name : "Creating Stock Charts"
    },
    {
        name : "Generating Forex Charts"
    },
    {
        name : "Growth Stocks"
    },
    {
        name : "Charts Trade"
    }
];

const ProCharts = () => {
    return ( 
        <div>
            <Textwrap><p>ChartGo simplifies the chart creation process. From a pie chart to a complex stock chart. We make it simple.</p></Textwrap>
            <Ulist>
               {proChartsLinks.map(link => {
                    return <LItem key={link.name}>•&nbsp;{link.name}</LItem>
               })}
            </Ulist>
        </div>
     );
}
 
export default ProCharts;