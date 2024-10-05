import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Topbar = () => {
  return (
    <Box
      gridArea="topbar"
      border="2px solid transparent"
      borderBottomColor="#8F8F8F"
      bg="#D1D7DE"
      px={12}
      py={6}
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
    >
      <InputGroup width="40%">
        <InputLeftElement>
          <SearchIcon color="#8F8F8F" cursor={"pointer"} />
        </InputLeftElement>
        <Input
          placeholder="Search..."
          size="md"
          variant="outline"
          borderColor="#8F8F8F"
          color="#8F8F8F"
          _placeholder={{ color: "#8F8F8F" }}
          _focus={{ borderColor: "#8F8F8F", boxShadow: "none" }}
          _hover={{
            boxShadow: "0 0 0 2px rgba(0, 0, 0, 0.1)",
            bg: "whiteAlpha.100",
            transition:
              "boxShadow 0.3s ease, background-color 0.3s ease-in-out",
          }}
        />
      </InputGroup>
    </Box>
  );
};

export default Topbar;
