import { Flex } from "@chakra-ui/react";
import SectionOne from "./CommunitySecton";
import Spaces from "./Spaces";
import AdminInfo from "./AdminInfo";

const Sidebar = () => {
  return (
    <Flex
      direction="column"
      color="text.gray"
      height="100%"
      bg="background.light"
      overflowY="auto"
      borderRight="2px solid"
      borderColor="border"
      gridArea="sidebar"
    >
      <SectionOne />

      <Spaces />

      <AdminInfo />
    </Flex>
  );
};

export default Sidebar;
