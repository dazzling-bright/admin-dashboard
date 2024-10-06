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
      bg="#F3F4F6"
      overflowY="auto"
      borderRight="2px solid #D1D7DE"
      gridArea="sidebar"
    >
      <SectionOne />

      <Spaces />

      <AdminInfo />
    </Flex>
  );
};

export default Sidebar;
