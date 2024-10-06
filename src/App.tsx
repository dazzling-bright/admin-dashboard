import { ChakraProvider, Grid } from "@chakra-ui/react";
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContent/MainContent";
import customTheme from "./theme/theme";

const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Grid
        templateAreas={` 
          "topbar topbar" 
          "sidebar main"
        `}
        gridTemplateRows="80px 1fr"
        gridTemplateColumns={["1fr", "250px 1fr"]}
        height="100vh"
        bg="#F3F4F6"
      >
        <Topbar />
        <Sidebar />
        <MainContent />
      </Grid>
    </ChakraProvider>
  );
};

export default App;
