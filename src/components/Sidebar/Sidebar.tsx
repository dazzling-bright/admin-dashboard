import { Flex } from "@chakra-ui/react";
import SectionOne from "./CommunitySecton";
import Spaces from "./Spaces";
import AdminInfo from "./AdminInfo";

const Sidebar = () => {
  return (
    <Flex
      direction="column"
      color="#606060"
      height="100%"
      bg="#D1D7DE"
      overflowY="auto"
      borderRight="2px solid #8F8F8F"
      pt={4}
      gridArea="sidebar"
    >
      <SectionOne />

      <Spaces />

      <AdminInfo />
    </Flex>
  );
};

export default Sidebar;
