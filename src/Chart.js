import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Info from "./components/Info/Info";
import Button from "./components/Buttons/SquareButton/SquareButton";
import Table from "./components/Table/Table";
import {ButtonContainer, ButtonArea, ButtonTwoArea} from "./Chart.style";
const Chart = () => {
    return ( 
        <div>
            <Header />
            <Info />
            <ButtonArea >
                <div></div>
                <ButtonContainer>
                    <Button name="CREATE CHART" />
                    <Button name="PREVIEW" />
                    <Button name="EXCEL or CSV" />
                </ButtonContainer>
                <div></div>
            </ButtonArea>
            
            <Table />

            <ButtonTwoArea >
                <div></div>
                <ButtonContainer>
                    <Button name="CREATE CHART" />
                    <Button name="PREVIEW" />
                    <Button name="EXCEL or CSV" />
                    <Button name="RESTART" />
                </ButtonContainer>
                <div></div>
            </ButtonTwoArea>

            <Footer />
        </div>
     );
}
 
export default Chart;