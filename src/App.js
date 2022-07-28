import { ThemeProvider } from "styled-components";
import {GlobalStyles} from "./themes/global";
import {theme} from "./themes/theme";
import Chart from "./Chart";
import './App.css';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          <Chart />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
