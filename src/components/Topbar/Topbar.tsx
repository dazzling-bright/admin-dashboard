import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Topbar = () => {
  return (
    <Box
      gridArea="topbar"
      border="2px solid transparent"
      borderBottomColor="#D1D7DE"
      bg="#F3F4F6"
      px={12}
      py={6}
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
    >
      <InputGroup width="40%">
        <InputLeftElement>
          <SearchIcon
            color="#6B7280"
            cursor={"pointer"}
            _hover={{
              color: "#111827",
              transition: " color 0.3s ease-in-out",
            }}
          />
        </InputLeftElement>
        <Input
          placeholder="Search"
          size="md"
          variant="outline"
          borderColor="#D1D7DE"
          color="#6B7280"
          borderRadius="lg"  
          _placeholder={{ color: "#6B7280", fontWeight: "600" }}
          _focus={{
            borderColor: "#D1D7DE",
            boxShadow: "0 0 0 2px rgba(0, 0, 0, 0.3)",
            backgroundColor: "whiteAlpha.700",
            transition:
              "boxShadow 0.3s ease, background-color 0.3s ease-in-out",
          }}
          _hover={{
            boxShadow: "0 0 0 2px rgba(0, 0, 0, 0.1)",
            backgroundColor: "whiteAlpha.700",
            transition:
              "boxShadow 0.3s ease, background-color 0.3s ease-in-out",
          }}
        />
      </InputGroup>
    </Box>
  );
};

export default Topbar;
