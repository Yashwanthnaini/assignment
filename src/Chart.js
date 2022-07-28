import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Button from "./components/Buttons/SquareButton/SquareButton";
import Table from "./components/Table/Table";
import Footer from "./components/Footer/Footer";

import {
        ButtonContainer, 
        ButtonOneArea, 
        ButtonTwoArea
                    } from "./Chart.style";

const Chart = () => {
    return ( 
        <>
            <Header />
            <Info />
            <ButtonOneArea >
                <div></div>
                <ButtonContainer>
                    <Button name="CREATE CHART" />
                    <Button name="PREVIEW" />
                    <Button name="EXCEL or CSV" />
                </ButtonContainer>
                <div></div>
            </ButtonOneArea>
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
        </>
     );
}
 
export default Chart;