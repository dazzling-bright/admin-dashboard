import { ChakraProvider, Grid } from "@chakra-ui/react";
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContent/MainContent";

const App = () => {
  return (
    <ChakraProvider>
      <Grid
        templateAreas={` 
          "topbar topbar" 
          "sidebar main"
        `}
        gridTemplateRows="80px 1fr"
        gridTemplateColumns={["1fr", "250px 1fr"]}
        height="100vh" 
        bg="#D1D7DE"
      >
        <Topbar />
        <Sidebar />
        <MainContent />
      </Grid>
    </ChakraProvider>
  );
};

export default App;
